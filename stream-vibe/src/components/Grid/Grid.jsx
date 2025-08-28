import classNames from "classnames"
import "./Grid.scss"

const Grid = (props) => {
  const { className, colums = 1, children } = props
  return (
    <>
      <ul
        className={classNames(className, "grid", {
          [`grid--${colums}`]: colums > 1,
        })}
      >
        {children.map((child, index) => (
          <li className="grid__item" key={index}>
            {child}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Grid
