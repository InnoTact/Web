import React, { Component } from "react"
import colors from "../styles/colors"
import { FaCheck, FaTimes } from "react-icons/fa"
import Card from "../components/Card"
import SubHeader from "../components/SubHeader"

const ContactItem = styled.div`
  margin-top: 3rem;
`

const ContactText = styled(Text)`
  font-size: 1rem;
  margin-bottom: 0.35rem;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 0.95rem;
  }
`

const TextArea = styled(Input)`
  min-height: 140px;
  line-height: 1.55;
`

const Status = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  padding: 1.3rem 2rem;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 6px;
  color: ${colors.darkgrey};
  background-color: ${colors.white};
  width: 100%;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    padding: 0.8rem 1.2rem;
  }
`

class ContactForm extends Component {
  getBorderColor = (text, validCheck) => {
    let borderColor
    if (text === "") {
      borderColor = colors.mediumGrey
    } else if (validCheck) {
      borderColor = colors.green
    } else {
      borderColor = colors.red
    }
    return borderColor
  }

  render() {
    const { formFilled } = this.props

    let emailBorderColor, nameBorderColor, messageBorderColor
    emailBorderColor = this.getBorderColor(email, emailValid)
    nameBorderColor = this.getBorderColor(name, nameValid)
    messageBorderColor = this.getBorderColor(message, true)

    return (
      <Card>
        <SubHeader dark>Fyll i formuläret</SubHeader>
        <form
          name="contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          style={{ marginTop: -45 }}
        >
          <input type="hidden" name="bot-field" />
          <ContactItem>
            <ContactText dark>Vad heter du?*</ContactText>
            <div style={{ position: "relative" }}>
              <Input
                style={{ borderColor: nameBorderColor }}
                placeholder="Ditt namn"
                required
                type="text"
                name="name"
                onChange={event => this.updateState("name", event)}
              />
              <Status>
                <FaCheck
                  style={{
                    fontSize: 14,
                    color: colors.green,
                    display: colors.green == nameBorderColor ? "block" : "none",
                  }}
                />
              </Status>
              <Status>
                <FaTimes
                  style={{
                    fontSize: 14,
                    color: colors.red,
                    display: colors.red == nameBorderColor ? "block" : "none",
                  }}
                />
              </Status>
            </div>
          </ContactItem>
          <ContactItem>
            <ContactText margi dark>
              Vad är din email-address?*
            </ContactText>
            <div style={{ position: "relative" }}>
              <Input
                style={{ borderColor: emailBorderColor }}
                placeholder="dinmail@gmail.com"
                required
                type="email"
                name="email"
                onChange={event => this.updateState("email", event)}
              />
              <Status>
                <FaCheck
                  style={{
                    fontSize: 14,
                    color: colors.green,
                    display:
                      colors.green == emailBorderColor ? "block" : "none",
                  }}
                />
              </Status>
              <Status>
                <FaTimes
                  style={{
                    fontSize: 14,
                    color: colors.red,
                    display: colors.red == emailBorderColor ? "block" : "none",
                  }}
                />
              </Status>
            </div>
          </ContactItem>
          <ContactItem>
            <ContactText dark>Berätta om din idé</ContactText>
            <TextArea
              style={{ borderColor: messageBorderColor }}
              as="textarea"
              placeholder={`Vad vill du skapa? Vad är din idé? När ska det vara klart?`}
              name="message"
              onChange={event => this.updateState("message", event)}
            />
          </ContactItem>
          <ContactItem style={{ marginTop: "2rem", textAlign: "left" }}>
            <Button type="submit" disabled={!formFilled} primary>
              Skicka
            </Button>
          </ContactItem>
        </form>
      </Card>
    )
  }
}

export default ContactForm
