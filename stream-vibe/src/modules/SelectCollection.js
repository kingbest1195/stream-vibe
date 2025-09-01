import BaseComponent from "@/modules/generic/BaseComponent"
import getParams from "@/utils/getParams"
import MatchMedia from "@/constants/MatchMedia"

const rootSelector = "[data-js-select]"

class Select extends BaseComponent {
  selectors = {
    root: rootSelector,
    originalControl: "[data-js-select-original-control]",
    button: "[data-js-select-button]",
    dropdown: "[data-js-select-dropdown]",
    option: "[data-js-select-option]",
  }

  stateClasses = {
    isExpanded: "is-expanded",
    isOnTheLeftSide: "is-on-the-left-side",
    isOnTheRightSide: "is-on-the-right-side",
    isSelected: "is-selected",
    isCurrent: "is-current",
  }

  initialState = {
    isExpanded: false,
    currentOptionIndex: null,
    selectedOptionElement: null,
  }

  constructor(rootElement) {
    super()
    this.rootElement = rootElement
    this.params = getParams(this.rootElement, this.selectors.root)
    this.originalControlElement = this.rootElement.querySelector(
      this.selectors.originalControl
    )
    this.buttonElement = this.rootElement.querySelector(this.selectors.button)
    this.dropdownElement = this.rootElement.querySelector(
      this.selectors.dropdown
    )
    this.optionElements = this.dropdownElement.querySelectorAll(
      this.selectors.option
    )

    this.state = this.getProxyState({
      ...this.initialState,
      currentOptionIndex: this.originalControlElement.selectedIndex,
      selectedOptionElement:
        this.optionElements[this.originalControlElement.selectedIndex],
    })

    setTimeout(this.fixDropdownPosition, 500)
    this.updateTabIndex()
    this.bindEvents()
  }

  updateUI() {
    const { isExpanded, currentOptionIndex, selectedOptionElement } = this.state

    const newSelectedOptionValue = selectedOptionElement.textContent.trim()

    const updateOriginalControl = () => {
      this.originalControlElement.value = newSelectedOptionValue
    }

    const updateButton = () => {
      this.buttonElement.textContent = newSelectedOptionValue
      this.buttonElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded
      )
      this.buttonElement.ariaSelected = isExpanded
      this.buttonElement.ariaActivedescendant =
        this.optionElements[currentOptionIndex].id
    }

    const updateDropdown = () => {
      this.dropdownElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded
      )
    }

    const updateOptions = () => {
      this.optionElements.forEach((optionElement, index) => {
        const isSelected = index === currentOptionIndex
        const isCurrent = optionElement === selectedOptionElement

        optionElement.classList.toggle(this.stateClasses.isSelected, isSelected)
        optionElement.classList.toggle(this.stateClasses.isCurrent, isCurrent)
        optionElement.ariaSelected = isSelected
      })
    }

    updateOriginalControl()
    updateButton()
    updateDropdown()
    updateOptions()
  }

  fixDropdownPosition = () => {
    const viewportWidth = document.documentElement.clientWidth
    const viewportCenterX = viewportWidth / 2
    const { width, x } = this.dropdownElement.getBoundingClientRect()
    const buttonCenterX = x + width / 2
    const isButtonOnTheLeftViewportSide = buttonCenterX < viewportCenterX

    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheLeftSide,
      isButtonOnTheLeftViewportSide
    )
    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheRightSide,
      !isButtonOnTheLeftViewportSide
    )
  }

  onMobileMatchMediaChange = (event) => {
    const isMobileDevice = event.matches
    this.updateTabIndex(isMobileDevice)
  }

  onOriginalControlChange = () => {
    this.state.selectedOptionElement =
      this.optionElements[this.originalControlElement.selectedIndex]
  }

  onButtonClick = () => {
    this.toggleExpandedState()
  }

  onDocumentClick = (event) => {
    const { target } = event
    const isButtonClick = target === this.buttonElement
    const isOptionClick = target.matches(this.selectors.option)
    const isInsideDropdown =
      target.closest(this.selectors.dropdown) === this.dropdownElement

    // Если клик на кнопке, ничего не делаем - обработается в onButtonClick
    if (isButtonClick) {
      return
    }

    // Если клик на опции в dropdown
    if (isOptionClick && isInsideDropdown) {
      this.state.selectedOptionElement = target
      this.state.currentOptionIndex = [...this.optionElements].findIndex(
        (optionElement) => optionElement === target
      )
      this.collapse()
      return
    }

    // Если клик вне селекта, закрываем dropdown
    if (!isInsideDropdown) {
      this.collapse()
    }
  }

  updateTabIndex(isMobileDevice = MatchMedia.mobile.matches) {
    this.originalControlElement.tabIndex = isMobileDevice ? 0 : -1
    this.buttonElement.tabIndex = isMobileDevice ? -1 : 0
  }

  toggleExpandedState() {
    this.state.isExpanded = !this.state.isExpanded
  }

  expand() {
    this.state.isExpanded = true
  }

  collapse() {
    this.state.isExpanded = false
  }

  get isNeedToExpand() {
    const isButtonFocused = document.activeElement === this.buttonElement

    return !this.state.isExpanded && isButtonFocused
  }

  selectCurrentOption() {
    this.state.selectedOptionElement =
      this.optionElements[this.state.currentOptionIndex]
  }

  onKeyDown = (event) => {
    const { code } = event

    const action = {
      ArrowUp: this.onArrowUpKeyDown,
      ArrowDown: this.onArrowDownKeyDown,
      Space: this.onSpaceKeyDown,
      Enter: this.onEnterKeyDown,
      Escape: this.onEscapeKeyDown,
    }[code]

    if (action) {
      event.preventDefault()
      action()
    }
  }

  onArrowUpKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    if (this.state.currentOptionIndex > 0) {
      this.state.currentOptionIndex--
    }
  }

  onArrowDownKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    if (this.state.currentOptionIndex < this.optionElements.length - 1) {
      this.state.currentOptionIndex++
    }
  }

  onSpaceKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    this.selectCurrentOption()
    this.collapse()
  }

  onEnterKeyDown = () => {
    if (this.isNeedToExpand) {
      this.expand()
      return
    }

    this.selectCurrentOption()
    this.collapse()
  }

  onEscapeKeyDown = () => {
    this.collapse()
  }

  bindEvents() {
    MatchMedia.mobile.addEventListener("change", this.onMobileMatchMediaChange)
    this.originalControlElement.addEventListener(
      "change",
      this.onOriginalControlChange
    )
    this.buttonElement.addEventListener("click", this.onButtonClick)
    document.addEventListener("click", this.onDocumentClick)
    this.rootElement.addEventListener("keydown", this.onKeyDown)
  }
}

class SelectCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Select(element)
    })
  }
}

export default SelectCollection
