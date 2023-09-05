export default function Category() {
  const Categories = [
    'Technology',
    'SAAS',
    'Templates',
    'Websites',
    'ECom Sites',
  ];
  return (
    <div className="flex bg-pink-200 justify-center">
      {Categories.map((item) => {
        return (
          <div className="p-2 border-2 rounded-lg bg-pink-400">{item}</div>
        );
      })}
    </div>
  );
}
