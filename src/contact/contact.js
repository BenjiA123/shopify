import "./contact.css";

function Contact() {
  return (
    <>
      <section className="contactus">
        <h1>CONTACT ME</h1>
        <div className="row">
          <form action="POST">
            <input type="text" name="name" placeholder="Name" id="name" />
            <br />
            <input type="email" name="email" placeholder="Email" id="email" />
            <br />
            <textarea
              name="message"
              placeholder="Message"
              id=""
              cols="30"
              rows="7"
            ></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
