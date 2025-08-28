import classNames from "classnames"
import "./Badge.scss"
import Icon from "@/components/Icon"

const Badge = (props) => {
  const {
    className,
    /**
     * '' (default) | 'accent'
     */
    mode = "",
    isBig = false,
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel,
  } = props
  return (
    <>
      <div
        className={classNames(className, "badge", {
          [`badge--${mode}`]: mode,
          "badge--big": isBig,
        })}
      >
        {iconName && (
          <Icon
            name={iconName}
            ariaLabel={iconAriaLabel}
            className="badge__icon"
            hasFill={hasFillIcon}
          />
        )}
        <span>{children}</span>
      </div>
    </>
  )
}

export default Badge
