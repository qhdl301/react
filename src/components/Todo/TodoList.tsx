import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

import { useRecoilValue, useRecoilState } from "recoil";
import {
  categoryState,
  categoryType,
  toDoSelector,
} from "../../atom/toDoAtoms";

const TodoList = () => {
  const [toDo] = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={categoryType.TO_DO}>TODO</option>
        <option value={categoryType.DOING}>DOING</option>
        <option value={categoryType.DONE}>DONE</option>
      </select>
      <CreateTodo></CreateTodo>
      <ul>
        {toDo.map((item) => (
          <Todo key={item.id} {...item}></Todo>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default TodoList;
