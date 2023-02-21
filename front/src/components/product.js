import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  return <Link to={`/product/${product.slug}`}>{product.name}</Link>;
};
export default Product;
