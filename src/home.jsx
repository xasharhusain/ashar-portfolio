function Home() {
  return (
    <main className="home-page">

      <section className="hero">

        <div className="hero-content">

          <div className="photo-box">
            <img
              src="/ashar.png"
              alt="Ashar Husain Shah"
              className="profile-photo"
            />
          </div>

          <p className="small-text">HELLO, I'M</p>

          <h1>Ashar Husain Shah</h1>

          <h2>BCA Student & Aspiring Developer</h2>

          <p className="intro">
            I am a BCA student interested in web development,
            programming and building useful digital projects.
          </p>

          <a href="/contact" className="btn">
            Contact Me
          </a>

        </div>

      </section>

    </main>
  );
}

export default Home;