import { BUILDERTOOLS } from './buildertools';
export const Tools = ({ addintoLibrary }) =>
  BUILDERTOOLS &&
  BUILDERTOOLS.map((item) => {
    return (
      <div
        className="list-item shadow-lg border"
        onClick={() => addintoLibrary(item)}
      >
        {item.title}
      </div>
    );
  });
