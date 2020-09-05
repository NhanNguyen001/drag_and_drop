import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

type TaskPropsType = {
  task: Record<string, string>;
  index: number;
};

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export const Task = ({ task, index }: TaskPropsType): JSX.Element => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
