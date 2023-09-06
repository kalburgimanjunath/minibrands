import { BUILDERTOOLS } from './buildertools';
import { useState, useEffect } from 'react';
export default function index() {
  const [pagelibrary, setPageLibrary] = useState([]);

  const addintoLibrary = (item) => {
    return setPageLibrary([...pagelibrary, item]);
  };
  const Tools = () =>
    BUILDERTOOLS &&
    BUILDERTOOLS.map((item) => {
      return (
        <div className="list-item" onClick={() => addintoLibrary(item)}>
          {item.title}
        </div>
      );
    });
  return (
    <div className="flex grid grid-cols-4 ">
      <div className="border-2 h-80 pane">
        <Tools />
      </div>
      <div className="p-5 pane">
        <div>drawing pane</div>
      </div>

      <div className="p-5 pane">Properties</div>
      <div className="p-5 pane">
        <div className="flex">
          <span className="list-item">Desktop</span>
          <span className="list-item">Mobile</span>
          <span className="list-item">Tablet</span>
        </div>
        <div>
          <div>Viewer</div>
          <div>
            {pagelibrary &&
              pagelibrary.map((item) => {
                return <div>{item.title}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
