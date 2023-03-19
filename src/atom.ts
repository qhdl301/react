import { atom, selector } from "recoil";

export interface ItoDo {
  id: number;
  text: string;
}

interface ItoDoState {
  [key: string]: ItoDo[]; // 범용적인 키를 사용 할 수 있다.
}

export const toDoState = atom<ItoDoState>({
  key: "toDo",
  default: {
    to_do: [],
    doing: [],
    done: [],
  },
});
