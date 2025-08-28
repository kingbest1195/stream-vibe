import classNames from "classnames"
import "./Accordeon.scss"

const Accordeon = (props) => {
  const { className, title, id, name, isOpen, children } = props
  return (
    <>
      <div className={classNames(className, "accordeon")}>
        <details className="accordeon__details" name={name} open={isOpen}>
          <summary className="accordeon__summary">
            <h3 className="accordeon__title h5">
              <span role="term" aria-details={id}>
                {title}
              </span>
            </h3>
          </summary>
        </details>
        <div className="accordeon__content" id={id} role="definition">
          <div className="accordeon__content-inner">
            <div className="accordeon__content-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordeon
