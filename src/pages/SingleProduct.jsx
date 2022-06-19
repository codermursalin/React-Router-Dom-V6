import products from "../data";
import { Link, useParams } from "react-router-dom";
const SingleProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const { name, image } = product;
  return (
    <section className="section product">
      <article key={product.id}>
        <h5>{name}</h5>
        <img src={image} alt={name} />
      </article>
      <Link to="/products">back to products</Link>
    </section>
  );
};
export default SingleProductPage;
