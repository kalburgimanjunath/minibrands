import { Header1, MainFooter } from '../../components/shared';
const AddedLibrary = (item) => {
  if (item.title == 'header') {
    return (
      <div>
        <Header1 />
      </div>
    );
  }
};
export const Viewer = ({ pagelibrary }) =>
  pagelibrary &&
  pagelibrary.map((item) => {
    return <AddedLibrary item={item} />;
  });
