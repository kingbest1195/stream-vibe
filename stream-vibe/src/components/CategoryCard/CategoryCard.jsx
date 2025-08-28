import classNames from "classnames"
import { Image } from "minista"
import Icon from "@/components/Icon"
import "./CategoryCard.scss"
import Badge from "@/components/Badge"

const CategoryCard = (props) => {
  const { className, title, images = [], badge } = props
  return (
    <>
      <a href="/movies" className={classNames(className, "category-card")}>
        <div className="category-card__images">
          {images &&
            images.length > 0 &&
            images.map((imgSrc, index) => (
              <Image
                src={imgSrc}
                key={index}
                className="category-card__image"
              />
            ))}
        </div>
        <div className="category-card__body">
          <h3 className="category-card__title">
            {badge && (
              <Badge className="category-card__badge" mode="accent" isBig>
                {badge}
              </Badge>
            )}
            <span>{title}</span>
          </h3>
          <Icon className="category-card__icon" name="arrow-right" />
        </div>
      </a>
    </>
  )
}

export default CategoryCard
