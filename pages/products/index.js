import { Hero, Cards } from '../../components/';
export default function index() {
  const products = [
    { id: 1, title: 'product 1', description: 'description' },
    { id: 2, title: 'product 2', description: 'description' },
    { id: 3, title: 'product 3', description: 'description' },
    { id: 4, title: 'product 4', description: 'description' },
  ];
  return (
    <>
      <Hero
        title="Want to invest in our product"
        subtitle="Check the latest product"
      />
      {products && <Cards items={products} title="" link="products" />}
    </>
  );
}
