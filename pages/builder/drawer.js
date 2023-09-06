import { useState, useEffect } from 'react';
export const Drawer = ({ pagelibrary, addSelectLibraryToProperty }) => {
  return (
    pagelibrary &&
    pagelibrary.map((item) => {
      return (
        <div onClick={() => addSelectLibraryToProperty(item)}>{item.title}</div>
      );
    })
  );
};
