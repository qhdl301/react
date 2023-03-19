import { categoryType, ToDoStateProps, toDoState } from "../../atom/toDoAtoms";
import { useSetRecoilState } from "recoil";

const Todo = ({ text, category, id }: ToDoStateProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClickEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...prevToDos.slice(0, targetIndex),
        newTodo,
        ...prevToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== categoryType.TO_DO && (
        <button name={categoryType.TO_DO} onClick={onClickEvent}>
          Todo
        </button>
      )}
      {category !== categoryType.DOING && (
        <button name={categoryType.DOING} onClick={onClickEvent}>
          Doing
        </button>
      )}
      {category !== categoryType.DONE && (
        <button name={categoryType.DONE} onClick={onClickEvent}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
