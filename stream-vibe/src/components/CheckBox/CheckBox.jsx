import classNames from "classnames"
import "./CheckBox.scss"
import getIdFromTitle from "@/utils/getIdFromTitle"

const CheckBox = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isRequired,
  } = props
  return (
    <>
      <label className={classNames(className, "check-box")} htmlFor={id}>
        <input
          className="check-box__input"
          type="checkbox"
          id={id}
          required={isRequired}
        />
        <span className="check-box__label">{label}</span>
      </label>
    </>
  )
}

export default CheckBox
