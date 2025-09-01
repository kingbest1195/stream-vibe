import classNames from "classnames"
import "./Select.scss"
import getIdFromTitle from "@/utils/getIdFromTitle"

const Select = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isLabelHidden = true,
    /**
     * Array | [{ value: string, isSelected?: boolean }]
     */
    options = [],
    isRequired = false,
    buttonClassName,
  } = props

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  }

  const selectedOption =
    options.find((option) => option.isSelected) ?? options[0]

  return (
    <>
      <div className={classNames(className, "select")} data-js-select="">
        <label
          className={classNames("select__label", {
            "visually-hidden": isLabelHidden,
          })}
          id={IDs.label}
          htmlFor={IDs.originalControl}
        >
          {label}
        </label>
        <select
          className={classNames("select__original-control", buttonClassName)}
          id={IDs.originalControl}
          defaultValue={selectedOption.value}
          required={isRequired}
          tabIndex={-1}
          data-js-select-original-control=""
        >
          {options.map(({ value }, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <div className="select__body">
          <div
            className={classNames("select__button", buttonClassName)}
            tabIndex={0}
            role="combobox"
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-controls={IDs.dropdown}
            aria-labelledby={IDs.label}
            data-js-select-button=""
          >
            {selectedOption.value}
          </div>
          <div
            className="select__dropdown"
            id={IDs.dropdown}
            role="listbox"
            aria-labelledby={IDs.label}
            data-js-select-dropdown=""
          >
            {options.map((option, index) => {
              const { value, isSelected = false } = option

              return (
                <div
                  className={classNames("select__option", {
                    "is-selected": isSelected,
                    "is-current": isSelected,
                  })}
                  role="option"
                  aria-selected={isSelected}
                  id={`${id}-option-${index}`}
                  data-js-select-option=""
                  key={index}
                >
                  {value}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Select
