import classNames from "classnames"
import "./MovieCard.scss"
import { Image } from "minista"
import Badge from "@/components/Badge"
import RatingView from "@/components/RatingView"

const MovieCard = (props) => {
  const {
    className,
    imgSrc,
    title,
    views,
    duration,
    href = "/movie",
    released,
    rating,
    season,
  } = props
  return (
    <>
      <a
        className={classNames(className, "movie-card")}
        href={href}
        title={title}
      >
        <h3 className="visually-hidden">{title}</h3>
        <Image src={imgSrc} className="movie-card__image" />
        <div className="movie-card__body">
          {duration && (
            <Badge iconName="clock" iconAriaLabel="Duration" hasFillIcon>
              {duration}
            </Badge>
          )}

          {season && (
            <Badge iconName="catalog" iconAriaLabel="Season" hasFillIcon>
              {season}
            </Badge>
          )}

          {views && (
            <Badge iconName="eye" iconAriaLabel="Views" hasFillIcon>
              {views}
            </Badge>
          )}

          {released && (
            <Badge className="movie-card__released-badge">
              Released at{" "}
              <time
                className="movie-card__released-badge-label"
                datetime={released.dateTime}
              >
                {released.label}
              </time>
            </Badge>
          )}

          {rating && (
            <Badge className="movie-card__rating-badge">
              <RatingView {...rating} />
            </Badge>
          )}
        </div>
      </a>
    </>
  )
}

export default MovieCard
