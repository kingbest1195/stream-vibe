import classNames from "classnames"
import "./Field.scss"
import getIdFromTitle from "@/utils/getIdFromTitle"

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    placeholder,
    /**
     * undefined(default) | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week'
     */
    type,
    isRequired = false,
    /**
     * undefined(default) | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week'
     */
    inputMode,
    mask,
    renderBefore,
  } = props

  const Component = type === "textarea" ? "textarea" : "input"
  const extraAttrs = {}
  if (mask) {
    extraAttrs["data-js-input-mask"] = mask
  }

  return (
    <>
      <div className={classNames(className, "field")}>
        <label className="field__label" htmlFor={id}>
          {label}{" "}
          {isRequired && (
            <span className="field__required-star" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <div className="field__body">
          {renderBefore?.("field__control")}
          <Component
            className="field__control"
            id={id}
            placeholder={placeholder}
            type={type}
            required={isRequired}
            inputMode={inputMode}
            {...extraAttrs}
          />
        </div>
      </div>
    </>
  )
}

export default Field
