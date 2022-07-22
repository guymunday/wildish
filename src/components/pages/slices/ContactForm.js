import React from "react"
import styled from "styled-components"

const StyledContactForm = styled.section`
  display: flex;
  align-items: center;
  background: var(--yellow);
  .contact__form__left,
  .contact__form__right {
    flex: 1;
    padding: 50px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact__form__left {
    background: #000;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .contact__form__right {
    flex-direction: column;
    .contact__form__copy {
      text-align: center;
      max-width: 300px;
      margin-bottom: 50px;
    }
    form {
      width: 100%;
      column-count: 2;
      column-gap: 30px;
      @media (max-width: 600px) {
        column-count: 1;
      }
      label {
        margin: 0;
        padding: 0;
        margin-bottom: 5px;
      }
      .contact__form__input {
        display: flex;
        flex-direction: column;
        break-inside: avoid;
        margin-bottom: 10px;
        input[type="text"],
        input[type="url"],
        input[type="tel"],
        input[type="email"],
        textarea {
          font-size: 1rem;
          padding: 5px 10px;
          border-radius: 26px;
          border: none;
          outline: none;
          border: gray 1px solid;
          &:focus {
            box-shadow: 0px 0px 0px 1px black;
          }
        }
        input[type="radio"] {
          width: 20px;
          height: 20px;
          border: none;
          outline: none;
          border: gray 1px solid;
          margin-right: 5px;
        }
        .contact__form__radio {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .contact__form__radio__item {
            display: flex;
            align-items: center;
            .contact__form__radio__label {
              font-size: 1rem;
              margin: 0 !important;
            }
          }
        }
      }
      .contact__form__submit {
        column-span: all;
        text-align: center;
        input[type="submit"] {
          cursor: pointer;
          background: #000;
          border-radius: 26px;
          outline: none;
          border: rgba(0, 0, 0, 0) 1px solid;
          color: #fff;
          padding: 5px 20px;
          font-size: 1.2rem;
          transition: 0.2s ease;
          margin-top: 30px;
          &:hover,
          &:focus {
            color: #000;
            background: #fff;
            border: gray 1px solid;
            box-shadow: 0px 0px 0px 1px black;
          }
        }
      }
    }
  }
`

export default function ContactForm({ input }) {
  const [status, setStatus] = React.useState("")

  function submitForm(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <StyledContactForm>
      <div className="contact__form__left">
        <div className="square-iframe-container">
          <video
            className=""
            src={input?.lobster?.mediaItemUrl}
            playsInline
            muted
            autoPlay
            loop
          />
        </div>
      </div>
      <div className="contact__form__right yellow">
        <div
          dangerouslySetInnerHTML={{ __html: input?.copy }}
          className="contact__form__copy html"
        />

        <form
          onSubmit={(e) => submitForm(e)}
          method="POST"
          action="http://login.wildishandco.co.uk/wp-json/contact-form-7/v1/contact-forms/2460/feedback"
        >
          <div className="contact__form__input">
            <label for="form-name">1. Your name:</label>
            <input
              type="text"
              placeholder="John Doe"
              name="full-name"
              id="form-name"
              required
            />
          </div>
          <div className="contact__form__input">
            <label for="form-company">2. Company name:</label>
            <input
              type="text"
              placeholder="Company"
              name="company"
              id="form-company"
            />
          </div>
          <div className="contact__form__input">
            <label htmlFor="form-email">3. Email address:</label>
            <input
              type="email"
              placeholder="john@example.com"
              name="email"
              id="form-email"
              required
            />
          </div>
          <div className="contact__form__input">
            <label htmlFor="form-telephone">4. Phone number:</label>
            <input
              type="tel"
              placeholder="Phone Number"
              name="telephone"
              id="form-telephone"
            />
          </div>
          <div className="contact__form__input">
            <label htmlFor="form-message">5. What do you need?</label>
            <textarea
              placeholder="Your problem, scope, goals - as much information as you like"
              rows="5"
              name="message"
              id="form-message"
              required
            />
          </div>
          <div className="contact__form__input">
            <p>6. What's your budget?</p>
            <div className="contact__form__radio">
              <div className="contact__form__radio__item">
                <input
                  type="radio"
                  name="budget"
                  id="form-budget-1"
                  value="£0-£5k"
                />
                <label
                  htmlFor="form-budget-1"
                  className="contact__form__radio__label"
                >
                  £0-£5k
                </label>
              </div>
              <div className="contact__form__radio__item">
                <input
                  type="radio"
                  name="budget"
                  id="form-budget-2"
                  value="£5k-£20k"
                />
                <label
                  htmlFor="form-budget-2"
                  className="contact__form__radio__label"
                >
                  £5-£20k
                </label>
              </div>
              <div className="contact__form__radio__item">
                <input
                  type="radio"
                  name="budget"
                  id="form-budget-2"
                  value="£20k+"
                />
                <label
                  htmlFor="form-budget-3"
                  className="contact__form__radio__label"
                >
                  £20k+
                </label>
              </div>
            </div>
          </div>
          <div className="contact__form__input">
            <label htmlFor="form-website">
              7. Your website (if you have one):
            </label>
            <input
              type="url"
              placeholder="www.yoursite.com"
              name="website"
              id="form-website"
            />
          </div>
          <div className="contact__form__submit">
            {status === "SUCCESS" ? (
              <p>We've got your message. Thanks!</p>
            ) : (
              <input type="submit" />
            )}
            {status === "ERROR" && (
              <p style={{ marginTop: 20 }}>
                Ooops, there was an error! Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </StyledContactForm>
  )
}
