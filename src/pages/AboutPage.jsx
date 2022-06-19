import {Link} from 'react-router-dom';
const AboutPage = () => {
  return (
    <section className='section'>
      <h2>AboutPage</h2>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
};
export default AboutPage;