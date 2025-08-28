import classNames from "classnames"
import "./Button.scss"
import Icon from "@/components/Icon"

const Button = (props) => {
  const {
    type = "button",
    href,
    target,
    className,
    label,
    /**
     * '' (default) | 'transparent' | 'black-10' | 'black-08' | 'black-06'
     */
    mode = "",
    isLabelHidden = false,
    iconName,
    /**
     * 'before' | 'after'
     */
    iconPosition = "before",
    hasFillIcon,
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const buttonProps = { type }
  const linkProps = { href, target }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      atia-label={title}
      title={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
