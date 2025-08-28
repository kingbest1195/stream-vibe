import classNames from "classnames"
import "./PlanCard.scss"
import Button from "@/components/Button"

const PlanCard = (props) => {
  const { className, title, description, price = {} } = props
  return (
    <>
      <div className={classNames(className, "plan-card")}>
        <div className="plan-card__info">
          <h3 className="plan-card__title h4">{title}</h3>
          <div className="plan-card__description">
            <p>{description}</p>
          </div>
        </div>
        <div className="plan-card__conditions">
          <span className="plan-card__price">{price.value}</span>
          <span className="plan-card__period">{price.period}</span>
        </div>
        <div className="plan-card__actions">
          <Button
            label="Start free trial"
            href="/subscribtion"
            mode="black-08"
          />
          <Button label="Choose plan" href="/subscribtion" />
        </div>
      </div>
    </>
  )
}

export default PlanCard
