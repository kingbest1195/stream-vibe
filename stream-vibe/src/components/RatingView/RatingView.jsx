import classNames from "classnames"
import "./RatingView.scss"

const RatingView = (props) => {
  const { className, value = 5, label } = props
  const ariaLabel = `Rating: ${value} out of 5`

  return (
    <>
      <div
        className={classNames(className, "rating-view")}
        aria-label={ariaLabel}
        title={ariaLabel}
        style={{ "--ratingViewValue": value }}
      >
        <div className="rating-view__stars">
          <img
            src="/rating/stars_unfilled.svg"
            alt=""
            className="rating-view__stars-unfilled"
            width={98}
            height={18}
          />
          <img
            src="/rating/stars_filled.svg"
            alt=""
            className="rating-view__stars-filled"
            width={98}
            height={18}
          />
        </div>

        {label && <div className="rating-view__label">{label}</div>}
      </div>
    </>
  )
}

export default RatingView
