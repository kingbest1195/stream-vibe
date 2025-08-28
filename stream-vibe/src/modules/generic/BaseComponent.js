class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error("Unable to init clone of BaseComponent, it is abstract!")
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }

  /**
   * Перерисовка UI в ответ на обновление состояния
   */

  updateUI() {
    throw new Error("update UI didnt set yet")
  }
}

export default BaseComponent
