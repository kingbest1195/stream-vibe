import classNames from "classnames"
import Section from "@/layouts/Section"
import Button from "@/components/Button"
import AccordeonGroup from "@/components/AccordeonGroup"
import Accordeon from "@/components/Accordeon"

const Questions = (props) => {
  const { className } = props
  const questionItems = [
    "What is StreamVibe?",
    "How much does StreamVibe cost?",
    "What content is available on StreamVibe?",
    "How can I watch StreamVibe?",
    "How do I sign up for StreamVibe?",
    "What is the StreamVibe free trial?",
    "How do I contact StreamVibe customer support?",
    "What are the StreamVibe payment methods?",
  ]
  const answerItems = [
    "StreamVibe is a modern streaming service offering a wide selection of movies, TV shows, and original content for on-demand viewing. The platform allows users to enjoy their favorite content in high quality across various devices.",
    "StreamVibe offers several pricing plans, starting from a basic plan at $9.99 per month to a premium plan at $19.99 per month. The basic plan includes access to the core content library, while the premium plan provides access to exclusive content, multi-device simultaneous streaming, and downloads for offline viewing.",
    "StreamVibe offers thousands of movies and TV shows across various genres, including dramas, comedies, action films, documentaries, and children's content. The service also features exclusive original shows and movies that can only be found on StreamVibe.",
    "StreamVibe is available on multiple devices, including smartphones (iOS and Android), tablets, computers (via web browser), smart TVs, Apple TV, Roku, Fire TV, and gaming consoles. The StreamVibe app can be downloaded from the respective app stores.",
    "To sign up for StreamVibe, visit the official website streamvibe.com or download the app on your device. Choose a suitable subscription plan, create an account by providing your email and password, and then enter your payment details. Once registration is complete, you'll immediately have access to the entire content library.",
    "StreamVibe offers a 30-day free trial for new users. During this period, you get full access to all features of your chosen plan. You can cancel your subscription anytime before the trial period ends, and you won't be charged.",
    "StreamVibe customer support is available 24/7. You can contact them via support chat on the website or in the app, by email at support@streamvibe.com, or by phone at 1-800-STREAM-VB. An extensive FAQ section and knowledge base are also available on the website.",
    "StreamVibe accepts most major credit and debit cards (Visa, MasterCard, American Express, Discover), PayPal, StreamVibe gift cards, as well as Apple Pay and Google Pay on compatible devices. In some regions, payment through mobile carriers is also available.",
  ]

  return (
    <>
      <Section
        title="Frequently Asked Questions"
        titleId="questions-title"
        description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        actions={<Button label="Ask a question" href="/support" />}
      >
        <AccordeonGroup colums={2}>
          {questionItems.map((question, index) => (
            <Accordeon
              title={question}
              id={`question-${index}`}
              name="questions"
              isOpen={index === 0}
              key={index}
            >
              <p>{answerItems[index]}</p>
            </Accordeon>
          ))}
        </AccordeonGroup>
      </Section>
    </>
  )
}

export default Questions
