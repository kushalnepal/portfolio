import "./New.component.css";
import imgcool from "../../image/kushaldevmode.png";
import { Link } from "react-router-dom";

const NewComponent = () => {
  return (
    <>
      <nav className="navbar active">
        <div className="max-width">
          <div className="logo">
            <Link to="/">
              <span>portfolio.</span>
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/teams">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="menu-btn">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
          </div>
        </div>
      </nav>

      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello!!, my name is </div>
            <div className="text-2">Kushal Nepal. </div>
            <div className="text-3">
              <span>Full Stack Developer</span>
            </div>
            <Link to="/hire_me">Hire me</Link>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={imgcool} id="imgmyphoto" alt="imgcool" />
            </div>
            <div className="column right">
              <div className="text">
                I am Kushal and I am a <span>Web Developer</span>
              </div>
              <p>
                Experienced Web Developer with a demonstrated history of working
                in the e-learning industry. Skilled in Full-Stack Development,
                Front-end Development, Research, Programming, and Writing.
                Strong engineering professional with a Bachelors degree focused
                in development .
              </p>
              <a href="https://docs.google.com/document/d/1rzwskLgloMxDFo0EeP7PNHd2k5pZ3Zav/edit">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="max-width">
          <h2 style={{ color: "#fff" }}>My Services</h2>
          <div className="services-content">
            <div className="card">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Web Designing</div>
              <p>Beautiful themes and responsive, customizable websites.</p>
            </div>
            <div className="card">
              <i className="fas fa-code"></i>
              <div className="text">App Development</div>
              <p>
                Dynamic mobile applications designed and developed using React
                Native.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-chart-line"></i>
              <div className="text">Analytics</div>
              <p>
                Using our best research team, we can generate significant
                traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Link to="/" className="gototop" style={{ background: "crimson" }}>
        Go to top
      </Link>
      <footer>{/* Footer content */}</footer>
    </>
  );
};

export default NewComponent;
