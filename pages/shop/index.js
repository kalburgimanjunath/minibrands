import { Banner, Cards, Category } from '../../components/';
export default function index() {
  const items = [
    {
      id: 1,
      title: 'item 1',
      description: 'item 1 description',
      price: 1000,
      discount: 20,
    },
    {
      id: 2,
      title: 'item 2',
      description: 'item 2 description',
      price: 2000,
      discount: 20,
    },
  ];
  return (
    <div>
      <Banner />
      <Category />
      <Cards title="new arrival" items={items} link="shop" />
      <Cards title="best sellers" items={items} link="shop" />
      <Cards title="new releases" items={items} link="shop" />
    </div>
  );
}
