import classNames from "classnames"
import "./Support.scss"
import { Image } from "minista"
import Field from "@/components/Field"
import CheckBox from "@/components/CheckBox"
import Button from "@/components/Button"
import Select from "@/components/Select"

const Support = (props) => {
  const { className } = props
  const titleId = "support-title"

  return (
    <>
      <section
        className={classNames(className, "support", "container")}
        aria-labelledby={titleId}
      >
        <div className="support__body">
          <div className="support__info">
            <h1 className="support__title h2" id={titleId}>
              Get in touch with us
            </h1>
            <div className="support__description">
              <p>
                Our support team is here to help you with any questions or
                issues you may have.
              </p>
            </div>
          </div>
          <Image
            className="support__image"
            src="/src/assets/images/support/1.png"
          />
        </div>
        <form className="support__form">
          <Field
            className="support__form-cell"
            label="First Name"
            placeholder="Ivan"
            isRequired
          />
          <Field
            className="support__form-cell"
            label="Last Name"
            placeholder="Ivanov"
          />
          <Field
            className="support__form-cell"
            label="Email"
            type="email"
            placeholder="ivanov@gmail.com"
            isRequired
          />
          <Field
            className="support__form-cell"
            label="Phone Number"
            placeholder="(123) 456-78-90"
            inputMode="tel"
            mask="(000) 000-00-00"
            renderBefore={(buttonClassName) => (
              <Select
                label="Phone Number Prefix"
                options={[
                  { value: "+7", isSelected: true },
                  { value: "+1" },
                  { value: "+44" },
                  { value: "+995" },
                ]}
                buttonClassName={buttonClassName}
              />
            )}
          />
          <Field
            className="support__form-cell support__form-cell--wide"
            label="Message"
            placeholder="Tell us about your issue"
            type="textarea"
            isRequired
          />
          <div className="support__form-cell support__form-cell--wide support__form-cell--actions">
            <CheckBox
              className="support__form-agreement"
              label="I agree to the processing of personal data"
              isRequired
            />
            <Button
              className="support__form-submit-button"
              label="Send message"
              type="submit"
            />
          </div>
        </form>
      </section>
    </>
  )
}

export default Support
