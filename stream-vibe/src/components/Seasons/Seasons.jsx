import classNames from "classnames"
import "./Seasons.scss"
import AccordeonGroup from "../AccordeonGroup"
import seasonItems from "./seasonItems"
import Accordeon from "../Accordeon"
import EpisodeCard from "../EpisodeCard"

const Seasons = (props) => {
  const { className } = props
  return (
    <>
      <AccordeonGroup className="seasons" mode="dark" isOrderedList={false}>
        {seasonItems.map(({ title, subtitle, episodes }, index) => (
          <Accordeon
            title={title}
            titleLevelClassName="h4"
            subtitle={subtitle}
            id={`season-${index}`}
            name="seasons"
            isOpen={index === 0}
            isArrowButton={true}
            key={index}
          >
            <ul className="seasons__list">
              {episodes.map((episode, index) => (
                <li className="seasons__item" key={index}>
                  <EpisodeCard {...episode} />
                </li>
              ))}
            </ul>
          </Accordeon>
        ))}
      </AccordeonGroup>
    </>
  )
}

export default Seasons
