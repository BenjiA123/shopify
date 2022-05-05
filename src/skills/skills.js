import "./skills.css";
import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <section className="boltcap_transactions">
        <div className="boltcap_skill_description">
          <h1>Track Record</h1>
          <p>
            Welcome to TEcK WRLD. My name is Benjamin Akande and I am a the
            founder of Teck Wrld. In Teck Wrld, our goal is to give our clients
            the best applications to scale their businesses. We use the best
            technologies as you can verify below. In this Company, one thing
            that we can assure you is EXCELLENCE. We are a group of highly
            trained professinals who use the best practices for all our Clients.
            Check Our Plans below and add the feature you need.
          </p>
        </div>
        <div className="boltcap_group">
          <div className="card">
            <div>JAVASCRIPT</div>
            <p>
              Javascript is the language of the web, that being said, It is the
              most important when it comes to the devalopment of websites and
              web Applications. Nodejs and Expressjs, however, are the best in
              the market when it comes to the development of APIs with JS since
              they work seamlessly together.
            </p>
          </div>
          <div className="card">
            <div>MONGODB</div>
            <p>
              Mongo DB is a NoSQL Database that organisise our user data
              optimally and permits for easy modelling and faster reponse time
              which leads to a more optimal Web application. If you need to
              implement a database into your application then Mongo DB is the
              best choice for you.
            </p>
          </div>

          <div className="card">
            <div>ANGULAR</div>
            <p>
              The web is now vastly used for various Applications. What other
              way to create front end applications but with Angular which is
              very light weight Javascript framework. Angular provides a single
              page application that is calable of carring large websites in just
              a single load of a page. It is a javascript framework so it works
              well with Node and Expressjs.
            </p>
          </div>
          {/* <div className="card">
            <div>Infrastructure</div>
            <p>
              Succeeded in facilitating a $95 million Joint Venture projects
              between a major African developer and an infrastructure
              development company. Succeeded in connecting a foreign private
              equity firm to project promoters of a greenfield infrastructure
              project.
            </p>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Skills;
