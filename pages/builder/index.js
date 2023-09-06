import { useState, useEffect } from 'react';
import { Tools } from './tools';
import { Viewer } from './viewer';
import { Drawer } from './drawer';
import { Property } from './property';

export default function index() {
  const [pagelibrary, setPageLibrary] = useState([]);
  const [selectlibrary, setSelectLibrary] = useState();

  const addintoLibrary = (item) => {
    return setPageLibrary([...pagelibrary, item]);
  };
  const addSelectLibraryToProperty = (item) => {
    return setSelectLibrary(item);
  };

  return (
    <div className="flex grid grid-cols-4 ">
      <div className="h-80 pane ">
        <Tools addintoLibrary={addintoLibrary} />
      </div>
      <div className="p-5 pane">
        <div>drawing pane</div>
        <div>
          <Drawer
            pagelibrary={pagelibrary}
            addSelectLibraryToProperty={addSelectLibraryToProperty}
          />
        </div>
      </div>

      <div className="p-5 pane">
        <div>Properties</div>
        <Property selectlibrary={selectlibrary} />
      </div>
      <div className="p-5 pane">
        <div className="flex">
          <span className="list-item">Desktop</span>
          <span className="list-item">Mobile</span>
          <span className="list-item">Tablet</span>
        </div>
        <div>
          <div>Viewer</div>
          <div>
            <Viewer pagelibrary={pagelibrary} />
          </div>
        </div>
      </div>
    </div>
  );
}
