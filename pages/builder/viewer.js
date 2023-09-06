export const Viewer = ({ pagelibrary }) =>
  pagelibrary &&
  pagelibrary.map((item) => {
    return <div>{item.title}</div>;
  });
