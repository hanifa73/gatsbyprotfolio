import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
        <form action="https://formspree.io/f/moqppwwz" method="POST">
         <div className="form-group">
         <input type="text"  name="name" placeholder="name" className="form-control"></input>
         <input type="email"  name="_replyto" placeholder="email" className="form-control"></input>
         <textarea name="message"  rows="10" placeholder="message" className="form-control"></textarea>
         </div>
         <button type="submit" value="Send" className="submit-btn btn">submit </button>
        </form>
        </article>
        </section> 
    </Layout>

  )
}

export default contact
