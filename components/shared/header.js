export function MainHeader() {
  return <div>MainHeader</div>;
}
export const Header1 = ({ title, menu, banner }) => {
  const menu = ['Home', 'About Us', 'Products', 'Services', 'Contact Us'];
  const banner = '';
  return (
    <>
      <div>
        <div>Logo</div>
        <div>
          {menu &&
            menu.map((item) => {
              return <div>{item}</div>;
            })}
        </div>
      </div>
    </>
  );
};

export const Header2 = ({ title, menu, banner }) => {
  const menu = ['Home', 'About Us', 'Products', 'Services', 'Contact Us'];
  const banner = '';
  return (
    <>
      <div>
        <div>Logo</div>
        <div>
          Search:
          <input type="search" />
        </div>
        <div>
          {menu &&
            menu.map((item) => {
              return <div>{item}</div>;
            })}
        </div>
      </div>
    </>
  );
};
export { Header1, Header2, MainHeader };
