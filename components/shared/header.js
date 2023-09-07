function MainHeader() {
  return <div>MainHeader</div>;
}
const menu = ['Home', 'About Us', 'Products', 'Services', 'Contact Us'];
const banner = '';
const Header1 = ({ title }) => {
  return (
    <>
      <div className="flex p-5 bg-pink-100 items-center shadow-lg">
        <div>Logo</div>
        <div className="flex justify-end w-full">
          {menu &&
            menu.map((item) => {
              return <div className="p-2">{item}</div>;
            })}
        </div>
      </div>
    </>
  );
};

const Header2 = ({ title }) => {
  return (
    <>
      <div className="flex p-5 bg-pink-100 items-center shadow-lg">
        <div>Logo</div>
        <div>
          <input type="search" />
        </div>
        <div className="flex justify-end w-full">
          {menu &&
            menu.map((item) => {
              return <div className="p-2">{item}</div>;
            })}
        </div>
      </div>
    </>
  );
};
export { Header1, Header2, MainHeader };
