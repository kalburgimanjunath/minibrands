export default function Cards({ title }) {
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
  const CartItems = ({ items }) => {
    return (
      <div className="flex">
        {items &&
          items.map((item) => {
            return (
              <div className="rounded-lg bg-gray-100 m-2 p-5 hover:bg-gray-200 cursor-pointer">
                <div>
                  <img
                    className="rounded-lg"
                    src="https://picsum.photos/seed/picsum/200/300"
                    width="100"
                    height="100"
                  />
                </div>
                <div>{item.title}</div>
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
