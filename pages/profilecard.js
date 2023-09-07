import Input from '../components/shared/forms/input';

export default function Profilecard() {
  const Sidebar = () => {
    return (
      <div className="shadow-lg p-5 m-5 border">
        <h1>Theme</h1>
        <p>Use the below fields to fully customize the styling of your page</p>
        <lagend>Page Styles</lagend>
        <form>
          <div>
            <div>Background color </div>
            <div>
              <Input />
            </div>
          </div>
          <div>
            <div>Font Family</div>
            <div>
              <Input />
            </div>
          </div>
        </form>
      </div>
    );
  };
  const ProfileCard = () => {
    return (
      <div className="shadow-lg p-5 m-5 border bg-pink-100">
        <div className="shadow-lg p-5 m-5 border bg-white">Profile Card</div>
      </div>
    );
  };
  return (
    <div className="flex">
      <Sidebar />
      <ProfileCard />
    </div>
  );
}
