import "./About.css";

function About() {
  return (
    <div className="about">
      <p >
        Fish Tales is an interactive application that introduces a variety of
        fascinating fish from around the world.
      </p>
      <h2>The app allows users to:</h2>
      <ul className="app-list">
        <li>🐠 Browse a fish gallery</li>
        <li>📖 View detailed information about each fish</li>
        <li>❤️ Save favourite fish</li>
        <li>🌊 Learn interesting facts about marine life</li>
      </ul>
    </div>
  );
}

export default About;
