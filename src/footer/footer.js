import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>About Me</h3>
            <p>
              We use the best technologies as you can verify below. In this
              Company, one thing that we can assure you is EXCELLENCE. We are a
              group of highly trained professinals who use the best practices
              for all our Clients. Check Our Plans below and add the feature you
              need.
            </p>
            <div className="social_icons">
              <ol>
                <li>
                  <a href="index.html">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="col contact_us">
            <h3>Contact Me</h3>
            <ul>
              <li>
                <i className="fa fa-phone"></i> +2348062431389
              </li>
              <li>
                <i className="fa fa-envelope"></i> teckwrld@gmail.com
              </li>
              <li>
                <i className="fa fa-map-marker"></i> Abuja, Nigeria.
              </li>
              <li>
                <i className="fa fa-calendar"></i>Monday - Friday
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Me</a>
              </li>
              <li>
                <a href="promoters.html">Promoters</a>
              </li>
              <li>
                <a href="index.html">Features</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Quick Link</h3>
            <ul>
              <li>
                <a href="index.html">Knowledge Base</a>
              </li>
              <li>
                <a href="index.html">Hire An expert</a>
              </li>
              <li>
                <a href="index.html">FAQ</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row" style={{ textAlign: "center" }}>
        <p>
          Copyright &copy; 2022 by <strong>TeckWrld</strong>, Created By
          <strong>TeckWrld</strong>, 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
