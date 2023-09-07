import { Header1, Header2 } from '../../components/shared';
const AddedLibrary = ({ item }) => {
  console.log(item);
  if (item.title == 'header') {
    return (
      <div>
        <Header2 />
      </div>
    );
  } else {
    return <div>{item.title}</div>;
  }
};
export const Viewer = ({ pagelibrary }) =>
  pagelibrary &&
  pagelibrary.map((item) => {
    return <AddedLibrary item={item} />;
  });
