import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section className="section">
      <h1>Home Page</h1>
      <Link to="/about" className="btn">
        About
      </Link>
    </section>
  );
};
export default HomePage;
