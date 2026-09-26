import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">

          <img
            src="/ashar.png"
            alt="Ashar Husain Shah"
            className="profile-photo"
          />

          <p className="small-text">HELLO, I'M</p>

          <h1>Ashar Husain Shah</h1>

          <h2>BCA Student & Aspiring Developer</h2>

          <p>
            I am a BCA student passionate about web development,
            programming and building useful digital projects.
            I enjoy learning new technologies and improving my
            development skills through practical projects.
          </p>

          <div>
            <Link to="/about" className="btn">
              About Me
            </Link>

            <Link to="/projects" className="btn">
              View Projects
            </Link>
          </div>

        </div>
      </section>

      <section className="section">
        <h2>What I Do</h2>

        <div className="cards">

          <div className="card">
            <h3>Web Development</h3>
            <p>
              Learning and building websites using HTML, CSS,
              JavaScript and React.js.
            </p>
          </div>

          <div className="card">
            <h3>Programming</h3>
            <p>
              Learning programming with C and Java and improving
              problem-solving skills.
            </p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>
              Working with SQL and MySQL for storing and managing
              application data.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <section className="section">

      <h1>About Me</h1>

      <p>
        Hello! I am Ashar Husain Shah, a BCA student at BCA &
        Techno Group of Institutions, affiliated with the
        University of Lucknow.
      </p>

      <p>
        I am interested in web development, programming and
        software development. I like learning new technologies
        and using them to create practical and useful projects.
      </p>

      <p>
        Currently, I am learning JavaScript and React.js along
        with Java, C, SQL and MySQL. I am also improving my
        knowledge of Git and GitHub.
      </p>

      <h2>Education</h2>

      <div className="cards">

        <div className="card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>
            BCA & Techno Group of Institutions
          </p>
          <p>2025 – 2029</p>
          <p>University of Lucknow</p>
        </div>

        <div className="card">
          <h3>Class 12</h3>
          <p>
            Mahesh Pratap Intermediate College,
            Rudhauli-Basti
          </p>
          <p>2025 — 77.2%</p>
        </div>

        <div className="card">
          <h3>Class 10</h3>
          <p>Jagran Public School, Basti</p>
          <p>2023 — 72%</p>
        </div>

      </div>

    </section>
  );
}

function Skills() {
  return (
    <section className="section">

      <h1>My Skills</h1>

      <h2>Technical Skills</h2>

      <div className="cards">

        <div className="card">HTML</div>
        <div className="card">CSS</div>
        <div className="card">JavaScript</div>
        <div className="card">React.js</div>
        <div className="card">Java</div>
        <div className="card">C Programming</div>
        <div className="card">SQL</div>
        <div className="card">MySQL</div>
        <div className="card">Git & GitHub</div>
        <div className="card">MS Office</div>

      </div>

      <h2>Soft Skills</h2>

      <div className="cards">

        <div className="card">Communication Skills</div>
        <div className="card">Teamwork</div>
        <div className="card">Quick Learning</div>
        <div className="card">Time Management</div>
        <div className="card">Problem Solving</div>
        <div className="card">Adaptability</div>

      </div>

      <h2>Languages</h2>

      <div className="cards">
        <div className="card">English</div>
        <div className="card">Hindi</div>
      </div>

    </section>
  );
}

function Projects() {
  return (
    <section className="section">

      <h1>My Projects</h1>

      <div className="cards">

        <div className="project-card">

          <h2>Smart Campus Assistant</h2>

          <p>
            A modern campus assistant web application designed
            to provide students with useful campus information
            in one place.
          </p>

          <p>
            Features include college notices, class timetable,
            campus events, student dashboard and profile.
          </p>

          <p>
            <strong>Technologies:</strong> React.js, JavaScript,
            HTML and CSS
          </p>

        </div>

        <div className="project-card">

          <h2>Skill Matrix</h2>

          <p>
            A web-based skill assessment project created to
            manage student information and conduct skill-based
            assessments.
          </p>

          <p>
            <strong>Technologies:</strong> Java, JSP, MySQL,
            HTML and CSS
          </p>

        </div>

        <div className="project-card">

          <h2>Personal Portfolio</h2>

          <p>
            My personal portfolio website where I showcase my
            education, technical skills, projects and contact
            information.
          </p>

          <p>
            <strong>Technologies:</strong> React.js, JavaScript,
            HTML and CSS
          </p>

        </div>

      </div>

    </section>
  );
}

function Resume() {
  return (
    <section className="section resume-section">

       <div className="resume-header">

  <div className="resume-header-info">
    <h1>Ashar Husain Shah</h1>

    <p className="resume-role">
      BCA Student & Aspiring Developer
    </p>

    <p>
      Email: asharhusainshah@gmail.com | Phone: 6307580838
    </p>
  </div>

  <img
    src="/ashar.png"
    alt="Ashar Husain Shah"
    className="resume-photo"
  />

</div>

      <div className="resume-content">

        <div className="resume-block">
          <h2>Career Objective</h2>

          <p>
            A motivated BCA student interested in web development,
            programming and software development. I am looking to
            improve my technical skills through practical projects
            and real-world learning opportunities.
          </p>
        </div>


        <div className="resume-block">
          <h2>Education</h2>

          <div className="resume-item">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>BCA & Techno Group of Institutions</p>
            <p>2025 – 2029 | University of Lucknow</p>
          </div>

          <div className="resume-item">
            <h3>Class 12</h3>
            <p>
              Mahesh Pratap Intermediate College, Rudhauli-Basti
            </p>
            <p>2025 | 77.2%</p>
          </div>

          <div className="resume-item">
            <h3>Class 10</h3>
            <p>Jagran Public School, Basti</p>
            <p>2023 | 72%</p>
          </div>
        </div>


        <div className="resume-block">
          <h2>Technical Skills</h2>

          <div className="resume-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Java</span>
            <span>C</span>
            <span>SQL</span>
            <span>MySQL</span>
            <span>Git & GitHub</span>
            <span>MS Office</span>
          </div>
        </div>


        <div className="resume-block">
          <h2>Projects</h2>

          <div className="resume-item">
            <h3>Smart Campus Assistant</h3>
            <p>
              React-based campus assistant with notices,
              timetable, events and student information.
            </p>
          </div>

          <div className="resume-item">
            <h3>Skill Matrix</h3>
            <p>
              Web-based skill assessment project using Java,
              JSP, MySQL, HTML and CSS.
            </p>
          </div>

          <div className="resume-item">
            <h3>Personal Portfolio</h3>
            <p>
              Personal portfolio website created using React,
              JavaScript, HTML and CSS.
            </p>
          </div>
        </div>


        <div className="resume-block">
          <h2>Soft Skills</h2>

          <p>
            Communication Skills • Teamwork • Quick Learning •
            Time Management • Problem Solving • Adaptability
          </p>
        </div>


        <div className="resume-block">
          <h2>Languages</h2>

          <p>English • Hindi</p>
        </div>

      </div>


      <div className="resume-actions">
        <button
          className="btn"
          onClick={() => window.print()}
        >
          Download / Print Resume
        </button>
      </div>

    </section>
  );
}

function Contact() {
  return (
    <section className="section contact">

      <h1>Contact Me</h1>

      <p>
        Have a project idea or want to connect?
        Feel free to reach out.
      </p>

      <div className="social-links">

        <a href="mailto:asharhusainshah@gmail.com">
          Email
        </a>

        <a href="tel:6307580838">
          Phone
        </a>

        <a
          href="https://instagram.com/xasharhusain"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://github.com/xasharhusain"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ashar-husain-b28298379/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <h2>Let's Connect</h2>

      <p>
        I am always interested in learning, building projects
        and connecting with people in the technology field.
      </p>

    </section>
  );
}

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <h2>Ashar Husain Shah</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <footer>
        <p>© 2026 Ashar Husain Shah | Portfolio</p>
      </footer>

    </BrowserRouter>
  );
}

export default App;