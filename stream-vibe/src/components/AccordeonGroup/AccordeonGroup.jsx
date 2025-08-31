import classNames from "classnames"
import "./AccordeonGroup.scss"

const AccordeonGroup = (props) => {
  const {
    className,
    /**
     * '' (default) | 'dark'
     */
    mode = "",
    colums = 1,
    children,
    isOrderedList = true,
  } = props
  const itemsPerColumn = Math.ceil(children.length / colums)
  const ListTag = isOrderedList ? "ol" : "ul"

  return (
    <>
      <ListTag
        className={classNames(className, "accordeon-group", {
          [`accordeon-group--${colums}-colums`]: colums > 1,
          "accordeon-group--has-counter": isOrderedList,
          [`accordeon-group--${mode}`]: mode,
        })}
      >
        {children.map((child, index) => (
          <li
            className={classNames("accordeon-group__item", {
              "accordeon-group__item--last-column-item":
                colums > 1 && itemsPerColumn / (index + 1) === 1,
            })}
            key={index}
          >
            {child}
          </li>
        ))}
      </ListTag>
    </>
  )
}

export default AccordeonGroup
