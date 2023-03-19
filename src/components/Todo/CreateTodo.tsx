import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../../atom/toDoAtoms";

type toDoForm = {
  toDo: string;
};

const CreateTodo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<toDoForm>();
  const onValid = ({ toDo }: toDoForm) => {
    setToDos((prevData) => [
      { text: toDo, id: Date.now(), category },
      ...prevData,
    ]);
    setValue("toDo", "");
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onValid)}
    >
      <input
        {...register("toDo", {
          required: true,
        })}
        placeholder="toDo"
      ></input>
      <span>{errors?.toDo?.message}</span>
      <button>선택</button>
    </form>
  );
};

export default CreateTodo;
