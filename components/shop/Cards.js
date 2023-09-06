import Link from 'next/link';
export default function Cards({ title, items, link }) {
  const CartItems = ({ items }) => {
    return (
      <div className="flex">
        {items &&
          items.map((item) => {
            return (
              <div className="rounded-lg border-2 bg-gray-100 m-2 p-1 hover:bg-gray-200 cursor-pointer">
                <div>
                  <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="p-1">
                  <Link href={`./${link}/:${item.id}`}>{item.title}</Link>
                </div>
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <div>
      <div className="flex align-items-center justify-between m-2 font-bold p-2">
        <h4 className="">{title.toUpperCase()}</h4>
        <div>See All</div>
      </div>
      <div>
        <CartItems items={items} />
      </div>
    </div>
  );
}
