import { Banner, Cards, Category } from '../../components/';
export default function index() {
  return (
    <div>
      <Banner />
      <Category />
      <Cards title="new arrival" />
      <Cards title="best sellers" />
      <Cards title="new releases" />
    </div>
  );
}
