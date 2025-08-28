import classNames from "classnames"
import "./Collections.scss"
import Tabs from "@/components/Tabs"
import collectionGroup from "./collectionGroup"
import getIdFromTitle from "@/utils/getIdFromTitle"
import Section from "@/layouts/Section"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import MovieCard from "@/components/MovieCard"

const Collections = (props) => {
  const { className } = props
  return (
    <>
      <Tabs
        className={classNames(className, "collections", "container")}
        title="Collections"
        isEnabledOnlyOnMobile
        items={collectionGroup.map((group, index) => ({
          isActive: group.isActive,
          title: group.title,
          children: (
            <div className="collections__group">
              <p className="collections__title hidden-mobile">{group.title}</p>
              {group.items.map((item, index) => {
                const { title, categoryItems, sliderParams, movieItems } = item

                const titleFormatted = `${getIdFromTitle(
                  group.title
                )}-${getIdFromTitle(title)}`
                const titleId = `${titleFormatted}-title`
                const sliderNavigationId = `${titleFormatted}-slider-navigation`

                return (
                  <Section
                    className="collections__section"
                    key={index}
                    title={title}
                    titleId={titleId}
                    actions={
                      <SliderNavigation
                        id={sliderNavigationId}
                        mode="tile"
                        hasPagination
                      />
                    }
                    isActionsHiddenOnMobile
                  >
                    <Slider
                      navigationTargetElementId={sliderNavigationId}
                      sliderParams={sliderParams}
                      isBeyondTheViewportOnMobileS
                    >
                      {categoryItems?.map((categoryItem, index) => (
                        <CategoryCard {...categoryItem} key={index} />
                      )) ??
                        movieItems?.map((movieItem, index) => (
                          <MovieCard {...movieItem} key={index} />
                        ))}
                    </Slider>
                  </Section>
                )
              })}
            </div>
          ),
        }))}
      />
    </>
  )
}

export default Collections
