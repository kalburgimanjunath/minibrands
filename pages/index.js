import { Hero } from '../components/';
export default function Home() {
  return (
    <div>
      <Hero
        title="Want to explore our lowest prices"
        subtitle="Check the latest services / products"
      />
      <Hero
        title="Want to build your own products"
        subtitle="start your mvp in minutes for free"
        link="builder"
      />
    </div>
  );
}
