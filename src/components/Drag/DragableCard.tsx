import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../../atom";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

const Button = styled.button<{ primary?: string }>`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

interface IDragabbleCardProps {
  boardId: string;
  toDoId: number;
  toDoText: string;
  index: number;
}

function DragabbleCard({
  boardId,
  toDoId,
  toDoText,
  index,
}: IDragabbleCardProps) {
  const setToDo = useSetRecoilState(toDoState);
  const handleRemove = (toDoId: number) => {
    setToDo((prevData) => ({
      ...prevData,
      [boardId]: prevData[boardId].filter((item) => item.id !== toDoId),
    }));
  };

  return (
    <Draggable draggableId={toDoId.toString()} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
          <Button onClick={() => handleRemove(toDoId)}>Remove</Button>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
