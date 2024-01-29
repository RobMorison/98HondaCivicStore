function Product({ products = [] }) {
  return (
    <>
    <h1>This is the product page</h1>
    <div>product</div>
      {products.map((product, index) => (
        <li key={index}>{product.productName}</li>
      ))}
    </>
  );
}
export default Product;
