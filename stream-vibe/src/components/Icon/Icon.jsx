import classNames from "classnames"
import "./Icon.scss"

const Icon = (props) => {
  const { className, name, hasFill = false, ariaLabel } = props

  // Создаем Safari-совместимую реализацию SVG иконок
  // Используем абсолютный URL для лучшей совместимости с браузерами
  const getIconPath = () => {
    if (typeof window !== "undefined") {
      // Проверяем режим разработки или production
      const isDev =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"

      if (isDev) {
        // В dev режиме используем путь к временному файлу Minista
        return (
          window.location.origin +
          "/node_modules/.minista/icons/serve/icons.svg"
        )
      } else {
        // В production используем собранный файл
        return window.location.origin + "/assets/images/icons.svg"
      }
    }
    // Для SSR используем относительный путь к production версии
    return "/assets/images/icons.svg"
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
