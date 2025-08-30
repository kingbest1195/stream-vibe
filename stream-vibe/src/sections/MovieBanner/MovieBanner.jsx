import classNames from "classnames"
import MovieBannerCard from "@/components/MovieBannerCard"

const MovieBanner = (props) => {
  const { className } = props
  const titleId = "movie-banner-title"

  return (
    <>
      <section className="container" aria-labelledby={titleId}>
        <MovieBannerCard
          title="Kantara"
          TitleTag="h1"
          titleId={titleId}
          description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
          imgSrc="/src/assets/images/movie-banner/2.jpg"
          isSmallPaddingY
        />
      </section>
    </>
  )
}

export default MovieBanner
