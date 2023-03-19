import { atom, selector } from "recoil";

export enum categoryType {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export type ToDoStateProps = {
  text: string;
  id: number;
  category: categoryType.TO_DO | categoryType.DOING | categoryType.DONE;
};

export const toDoState = atom<ToDoStateProps[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<ToDoStateProps["category"]>({
  key: "category",
  default: categoryType.TO_DO,
});

export const toDoSelector = selector({
  key: "toDOSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return [toDos.filter((toDo) => toDo.category === category)];
  },
});
