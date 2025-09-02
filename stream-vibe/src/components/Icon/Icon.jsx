import classNames from "classnames"
import "./Icon.scss"

const Icon = (props) => {
  const { className, name, hasFill = false, ariaLabel } = props

  // Создаем Safari-совместимую реализацию SVG иконок
  // Используем абсолютный URL для лучшей совместимости с браузерами
  const getIconPath = () => {
    if (typeof window !== "undefined") {
      // В браузере используем относительный путь от текущего домена
      return (
        window.location.origin + "/node_modules/.minista/icons/serve/icons.svg"
      )
    }
    // Для SSR используем относительный путь
    return "/node_modules/.minista/icons/serve/icons.svg"
  }

  return (
    <>
      <span className={classNames(className, "icon")} aria-label={ariaLabel}>
        <svg
          fill={hasFill ? "currentColor" : "none"}
          stroke={hasFill ? "none" : "currentColor"}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        >
          <use href={`${getIconPath()}#${name}`} />
        </svg>
      </span>
    </>
  )
}

export default Icon
