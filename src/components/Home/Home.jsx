import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { List } from '../Items/List';

export const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-5">
        <h1 className="text-primary mb-5">Cards</h1>
        <List />
      </div>
    </DndProvider>
  );
};
