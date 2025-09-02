import classNames from "classnames"
import "./MovieDetails.scss"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import PersonCard from "@/components/PersonCard"
import ReviewCard from "@/components/ReviewCard"
import Button from "@/components/Button"
import Icon from "@/components/Icon"
import Tags from "@/components/Tags"
import Ratings from "@/components/Ratings"

const MovieDetails = (props) => {
  const { className, seasons } = props
  const titleId = "movie-details-title"
  const castSliderNavigationId = "movie-cast-slider-navigation"
  const castItems = [
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/1.png",
      imgAlt: "Actor 1",
    },
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/2.png",
      imgAlt: "Actor 2",
    },
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/3.png",
      imgAlt: "Actor 3",
    },
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/4.png",
      imgAlt: "Actor 4",
    },
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/5.png",
      imgAlt: "Actor 5",
    },
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/6.png",
      imgAlt: "Actor 6",
    },
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/7.png",
      imgAlt: "Actor 7",
    },
    {
      imgSrc: "/src/assets/images/gen/movie-cast-actors/8.png",
      imgAlt: "Actor 8",
    },
  ]

  const reviewsItems = [
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by myself. I went to the cinemas to watch but had a houseful board so couldn't watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Maria Rodriguez",
      subtitle: "From Spain",
      description:
        "Absolutely breathtaking cinematography! The way they captured the essence of the village and its spiritual atmosphere is incredible. The story kept me engaged from start to finish.",
      ratingValue: 5.0,
    },
    {
      name: "Alex Thompson",
      subtitle: "From Canada",
      description:
        "A powerful narrative that explores deep themes of spirituality and human nature. The performances are outstanding, especially the lead actor. Highly recommend for anyone who loves thought-provoking cinema.",
      ratingValue: 4.8,
    },
    {
      name: "Yuki Tanaka",
      subtitle: "From Japan",
      description:
        "The folklore elements in this film are beautifully woven into the story. It's rare to see such authentic cultural representation in mainstream cinema. The soundtrack is also exceptional.",
      ratingValue: 4.7,
    },
    {
      name: "Sophie Dubois",
      subtitle: "From France",
      description:
        "This movie exceeded all my expectations. The character development is superb and the conflict between the young man and the forest officer creates such compelling tension. A masterpiece of storytelling.",
      ratingValue: 4.9,
    },
    {
      name: "Carlos Mendez",
      subtitle: "From Mexico",
      description:
        "The visual storytelling is absolutely stunning. Every frame feels like a painting. The way they use natural lighting and the forest setting creates such an immersive experience.",
      ratingValue: 4.6,
    },
    {
      name: "Emma Wilson",
      subtitle: "From Australia",
      description:
        "What a journey this film takes you on! The spiritual elements are handled with such respect and authenticity. The ending left me thinking about it for days afterward.",
      ratingValue: 4.4,
    },
    {
      name: "Hans Mueller",
      subtitle: "From Germany",
      description:
        "Excellent direction and cinematography. The film manages to balance action, drama, and spiritual elements perfectly. The performances are nuanced and believable throughout.",
      ratingValue: 4.3,
    },
  ]

  const languages = ["English", "Hindi", "Tamil", "Telugu", "Kannada"]
  const ratings = [
    {
      title: "IMDb",
      ratingValue: 4.5,
    },
    {
      title: "Streamvibe",
      ratingValue: 4.8,
    },
  ]

  const genres = ["Action", "Adventure"]

  return (
    <>
      <section
        className={classNames(className, "movie-details", "container")}
        aria-labelledby={titleId}
      >
        <h2 className="visually-hidden" id={titleId}>
          Movie Details
        </h2>
        <div className="movie-details__main">
          {seasons && (
            <div className="movie-details__panel movie-details__panel--seasons">
              <div className="movie-details__group movie-details__group--big-gap-y">
                <h3 className="h4">Seasons and episodes</h3>
                {seasons}
              </div>
            </div>
          )}
          <div className="movie-details__panel movie-details__panel--description">
            <div className="movie-details__group">
              <h3 className="movie-details__title">Description</h3>
              <div className="movie-details__description">
                <p>
                  A fiery young man clashes with an unflinching forest officer
                  in a south Indian village where spirituality, fate and
                  folklore rule the lands.
                </p>
              </div>
            </div>
          </div>
          <div className="movie-details__panel">
            <header className="movie-details__panel-header">
              <h3 className="movie-details__title">Cast</h3>
              <SliderNavigation
                id={castSliderNavigationId}
                mode="rounded"
                buttonMode="white-10"
                hasPagination={false}
              />
            </header>
            <Slider
              navigationTargetElementId={castSliderNavigationId}
              hasScrollbarOnMobile={false}
              sliderParams={{
                slidesPerView: "auto",
                spaceBetween: 10,
                breakpoints: {
                  1024: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                    allowTouchMove: false,
                  },
                },
              }}
            >
              {castItems.map((actor, index) => (
                <PersonCard
                  key={index}
                  imgSrc={actor.imgSrc}
                  imgAlt={actor.imgAlt}
                />
              ))}
            </Slider>
          </div>
          <div className="movie-details__panel movie-details__panel--large-gap-y">
            <header className="movie-details__panel-header">
              <h3 className="movie-details__title">Reviews</h3>
              <Button
                iconName="plus"
                mode="black-08"
                label="Add your review"
                href="/"
              />
            </header>
            <Slider
              navigationMode="rounded"
              isNavigationHiddenMobile={false}
              hasScrollbarOnMobile={false}
              sliderParams={{
                slidesPerView: 2,
                slidesPerGroup: 2,
                breakpoints: {
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    allowTouchMove: false,
                    spaceBetween: 20,
                  },
                },
              }}
            >
              {reviewsItems.map((review, index) => (
                <ReviewCard {...review} key={index} />
              ))}
            </Slider>
          </div>
        </div>
        <aside className="movie-details__info">
          <div className="movie-details__panel">
            <div className="movie-details__groups">
              <div className="movie-details__group">
                <h3 className="movie-details__title">
                  <Icon name="calendar" />
                  <span>Release Year</span>
                </h3>
                <div className="movie-details__description">
                  <time dateTime="2022-01-01" className="h6">
                    2022
                  </time>
                </div>
              </div>
              <div className="movie-details__group">
                <h3 className="movie-details__title">
                  <Icon name="language" />
                  <span>Available languages</span>
                </h3>
                <Tags items={languages} />
              </div>
              <div className="movie-details__group">
                <h3 className="movie-details__title">
                  <Icon name="star" />
                  <span>Ratings</span>
                </h3>
                <Ratings items={ratings} />
              </div>
              <div className="movie-details__group">
                <h3 className="movie-details__title">
                  <Icon name="grid" />
                  <span>Genres</span>
                </h3>
                <Tags items={genres} />
              </div>
              <div className="movie-details__group">
                <h3 className="movie-details__title">
                  <span>Directors</span>
                </h3>
                <PersonCard
                  imgSrc="/src/assets/images/gen/movie-cast-actors/1.png"
                  imgAlt="Director"
                  name="Rishab Shetty"
                  subtitle="From India"
                />
              </div>
              <div className="movie-details__group">
                <h3 className="movie-details__title">
                  <span>Music</span>
                </h3>
                <PersonCard
                  imgSrc="/src/assets/images/gen/movie-cast-actors/2.png"
                  imgAlt="Music Director"
                  name="Ramesh Shetty"
                  subtitle="From India"
                />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}

export default MovieDetails
