import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./atom";
import DragbleCard from "./components/Drag/DragableCard";
import Board from "./components/Drag/Board";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  console.log("toDos : ", toDos);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 1) sameBoard move 재 배치
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];

        // 1) Delete item on source.index
        boardCopy.splice(source.index, 1);
        // 2) Put back the item on the destination.index
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    } else {
      // 2) another Board move
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinaitionBoard = [...allBoards[destination.droppableId]];
        // 1) Delete item on source.index
        sourceBoard.splice(source.index, 1);
        // 2) Put back the item on the destination.index
        destinaitionBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinaitionBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board
              key={boardId}
              boardId={boardId}
              toDos={toDos[boardId]}
            ></Board>
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
