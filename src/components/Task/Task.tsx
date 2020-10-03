import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

type TaskPropsType = {
  task: Record<string, string>;
  index: number;
};

const Container = styled.div<{ isDragging: boolean }>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;

export const Task = ({ task, index }: TaskPropsType): JSX.Element => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
