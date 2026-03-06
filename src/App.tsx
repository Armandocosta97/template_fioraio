import { FormEvent, useState } from "react"

type FormStatus = "idle" | "sending" | "success" | "error" | "config"

function App() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [formMessage, setFormMessage] = useState("")
  const [fieldError, setFieldError] = useState("")

  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as
    | string
    | undefined

  const services = [
    {
      tag: "Su misura",
      title: "Bouquet su misura",
      description:
        "Composizioni personalizzate per ricorrenze, regali speciali e momenti quotidiani.",
      cta: "Scopri il servizio",
    },
    {
      tag: "Cerimonie",
      title: "Allestimenti eventi",
      description:
        "Progettazione floreale elegante per matrimoni, cerimonie e cene private.",
      cta: "Parla con noi",
    },
    {
      tag: "Stagionale",
      title: "Abbonamento stagionale",
      description:
        "Consegna periodica di fiori freschi con palette e varieta dedicate alla stagione.",
      cta: "Richiedi dettagli",
    },
  ]

  const galleryItems = [
    {
      name: "Bouquet artigianale in lavorazione",
      image: "/images/gallery-bouquet-lavorazione.jpg",
    },
    {
      name: "Composizione bouquet con rose e gigli",
      image: "/images/gallery-rose-gigli.jpg",
    },
    {
      name: "Bouquet rosa con fogliame verde",
      image: "/images/gallery-bouquet-rosa.jpg",
    },
    {
      name: "Bouquet da vetrina floreale",
      image: "/images/gallery-vetrina.jpg",
    },
  ]

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFieldError("")
    setFormMessage("")

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      privacy: formData.get("privacy"),
      website: String(formData.get("website") || "").trim(),
    }

    if (data.website) {
      setFormStatus("success")
      setFormMessage("Messaggio ricevuto.")
      formElement.reset()
      return
    }

    if (!data.name || !data.email || !data.message) {
      setFieldError("Compila nome, email e messaggio.")
      return
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      setFieldError("Inserisci una email valida.")
      return
    }

    if (!data.privacy) {
      setFieldError("Devi accettare la privacy policy.")
      return
    }

    if (!formEndpoint) {
      setFormStatus("config")
      setFormMessage(
        "Form pronto. Configura VITE_FORMSPREE_ENDPOINT per abilitare l'invio."
      )
      return
    }

    try {
      setFormStatus("sending")

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Invio fallito")
      }

      setFormStatus("success")
      setFormMessage("Grazie, ti risponderemo entro 24 ore.")
      formElement.reset()
    } catch {
      setFormStatus("error")
      setFormMessage("Invio non riuscito. Riprova tra poco.")
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container">
          <p className="brand">Fioraio Atelier</p>
          <nav aria-label="Navigazione principale">
            <ul className="nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#servizi">Servizi</a>
              </li>
              <li>
                <a href="#galleria">Galleria</a>
              </li>
              <li>
                <a href="#chi-siamo">Chi siamo</a>
              </li>
              <li>
                <a href="#contatti">Contatti</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-copy">
            <p className="eyebrow">Laboratorio floreale artigianale</p>
            <h1>Bouquet pensati con misura, luce e armonia.</h1>
            <p>
              Componiamo mazzi e allestimenti dal carattere essenziale, con
              attenzione ai dettagli e alle stagioni.
            </p>
            <a className="button" href="#contatti">
              Prenota una consulenza
            </a>
          </div>
        </section>

        <section className="section container" id="servizi">
          <h2>Servizi</h2>
          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <p className="card-eyebrow">{service.tag}</p>
                <h3>{service.title}</h3>
                <span className="card-divider" aria-hidden="true" />
                <p className="card-body">{service.description}</p>
                <a className="card-link" href="#contatti">
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="galleria">
          <h2>Galleria</h2>
          <div className="gallery" aria-label="Anteprime composizioni floreali">
            {galleryItems.map((item) => (
              <figure className="gallery-item" key={item.name}>
                <img loading="lazy" src={item.image} alt={item.name} />
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section container" id="chi-siamo">
          <h2>Chi siamo</h2>
          <div className="about-card">
            <p>
              Fioraio Atelier nasce a Firenze con una filosofia semplice:
              valorizzare la materia naturale con composizioni essenziali e
              senza eccessi.
            </p>
            <p>
              Lavoriamo su palette stagionali, texture botaniche e un approccio
              sartoriale per dare a ogni progetto una firma riconoscibile.
            </p>
          </div>
        </section>

        <section className="section container contact" id="contatti">
          <h2>Contatti</h2>
          <p>Via dei Giardini 24, Firenze</p>
          <p>Lun-Sab 09:00 - 19:00</p>
          <a href="tel:+390551234567">+39 055 123 4567</a>
          <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
            <input
              className="honeypot"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Messaggio</label>
            <textarea id="message" name="message" rows={5} required />

            <label className="checkbox">
              <input name="privacy" type="checkbox" required />
              <span>Acconsento al trattamento dati per essere ricontattato.</span>
            </label>

            {fieldError ? <p className="form-alert error">{fieldError}</p> : null}
            {formMessage ? (
              <p
                className={`form-alert ${
                  formStatus === "error" ? "error" : "success"
                }`}
                aria-live="polite"
              >
                {formMessage}
              </p>
            ) : null}

            <button type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Invio in corso..." : "Invia richiesta"}
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>Fioraio Atelier · Tutti i diritti riservati</small>
        </div>
      </footer>
    </div>
  )
}

export default App
