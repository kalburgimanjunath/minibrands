import Input from '../components/shared/forms/input';

export default function Profilecard() {
  const Sidebar = () => {
    return (
      <div className="shadow-lg p-5 m-5 border">
        <h1 className="font-bold text-2xl">Theme</h1>
        <p className="text-xs">
          Use the below fields to fully customize the styling of your page
        </p>

        <form>
          <lagend>Page Styles</lagend>
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
          <lagend>Profile Styles</lagend>
          <div>
            <div>Styles</div>
            <div>
              <Input />
            </div>
          </div>
          <div>
            <div>Background Image Styles</div>
            <div>
              <Input />
            </div>
          </div>
          <div>
            <div>Background Color</div>
            <div>
              <Input />
            </div>
          </div>
          <div>
            <div>Name color</div>
            <div>
              <Input />
            </div>
          </div>
          <div>
            <div>Description color</div>
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
      <div className="shadow-lg border rounded-lg bg-pink-100 p-5">
        <div>
          <img
            src="https://picsum.photos/id/237/200/300"
            className="w-full h-28"
          />
        </div>
        <div className="shadow-lg border rounded-md bg-white p-5">
          <div className="flex justify-between">
            <div>
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                width="50"
                height="50"
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-black text-white rounded-md border mt-2 p-1"
              >
                Share
              </button>
            </div>
          </div>
          <div className="">
            <div className="mt-5">
              <div className="font-bold">Manjunath Kalburgi</div>
            </div>
            <div>
              Lorem text Lorem text Lorem textLorem textLorem text Lorem text
              Lorem text Lorem textLorem text Lorem textLorem text
            </div>
          </div>
        </div>
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
