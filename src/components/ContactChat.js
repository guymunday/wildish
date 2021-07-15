import * as React from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const FormStyles = styled.div`
  background: var(--yellow);
  padding: 15px;
  border-radius: 28px;
  border: 2px solid black;
  max-width: 300px;
  height: 400px;
  overflow: scroll;
  form {
    display: flex;
    flex-direction: column;
    label,
    p {
      background: var(--white);
      border-radius: 28px;
      border: 2px solid black;
      padding: 10px;
      max-width: 80%;
    }
    label {
      align-self: flex-start;
    }
    p {
      align-self: flex-end;
    }
  }
`

export default function ContactChat() {
  const ref = React.useRef(null)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [budget, setBudget] = React.useState({ 0: false, 10: false, 50: false })
  const [message, setMessage] = React.useState("")

  //   React.useEffect(() => {
  //     gsap.from(ref.current, {
  //       height: 1,
  //       duration: 0.9,
  //       transformOrigin: "bottom bottom",
  //     })
  //   }, [])

  return (
    <>
      <FormStyles ref={ref}>
        <form>
          <label for="form-name">
            Hey! Thanks for reaching out. What's your name?
          </label>

          {name && <p>{name}</p>}

          <input
            id="form-name"
            name="your-name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <label for="form-email">Thanks! And you email?</label>

          {email && <p>{email}</p>}

          <input
            id="form-email"
            name="your-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            id="form-subject"
            name="your-subject"
            type="hidden"
            value="Website Enquiry"
            required
          />

          <br />

          <p>What's your budget?</p>
          <input
            type="radio"
            id="form-budget-1"
            name="form-budget"
            value="30"
          />
          <label for="form-budget-1">Up to £10k</label>
          <input
            type="radio"
            id="form-budget-2"
            name="form-budget"
            value="60"
          />
          <label for="form-budget-2">£10k to £50k</label>
          <input
            type="radio"
            id="form-budget-3"
            name="form-budget"
            value="100"
          />
          <label for="form-budget-3">£50k+</label>

          <br />

          <label for="form-message">Message</label>

          {message && <p>{message}</p>}

          <textarea
            id="form-message"
            name="your-message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </FormStyles>
    </>
  )
}
