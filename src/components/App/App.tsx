import React from 'react';
import { Column } from '../Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { initialData } from '../data';

const data: any = initialData;

export const App = (): JSX.Element => {
  const onDragEnd = () => {
    // TODO: reorder our column
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId: string) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId: string) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};
