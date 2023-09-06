import Link from 'next/link';
export default function Header() {
  const menus = [
    { title: 'Home', link: '/' },
    { title: 'Partner', link: 'partners' },
    { title: 'Products', link: 'products' },
    { title: 'Services', link: 'services' },
    { title: 'Shop', link: 'shop' },
    { title: 'Contact Us', link: 'contactus' },
  ];
  return (
    <div className="flex bg-pink-500 justify-center text-white">
      {menus &&
        menus.map((item) => {
          return (
            <div className="p-2  hover:bg-white hover:text-pink-300">
              <Link href={`${item.link}`}>{item.title}</Link>
            </div>
          );
        })}
    </div>
  );
}
