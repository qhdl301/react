import styled from "styled-components";

type SayHelloProps = {
  name: string;
  age: number;
};

const sayHello = (playerObj: SayHelloProps) => {
  return `Hello ${playerObj.name} you are ${playerObj.age} years old`;
};

type ContainerProps = {
  bgColor: string;
};

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

type CircleProps = {
  bgColor: string;
};

const Circle = ({ bgColor }: CircleProps) => {
  const player1 = sayHello({ name: "ys", age: 30 });
  const player2 = sayHello({ name: "jh", age: 30 });

  return (
    <div>
      {player1}, {player2}
      <Container bgColor={bgColor} />;
    </div>
  );
};

export default Circle;
export { sayHello };
