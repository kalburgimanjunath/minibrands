import { Input } from './forms/';
function MainHeader() {
  return <div>MainHeader</div>;
}
const menu = ['Home', 'About Us', 'Products', 'Services', 'Contact Us'];
const banner = '';
const Header1 = ({ title, search, align }) => {
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
        <div className="pr-2">Logo</div>
        <div className="flex w-4/6">
          <Input />
        </div>
        <div className="flex justify-end">
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
