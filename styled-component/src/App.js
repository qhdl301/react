import styled, { keyframes } from "styled-components";

/**
 * styled components를 사용하여 html 태그 이름 직관적으로 변경하여 사용 할 수 있다.
 */

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Emoji = styled.span`
  font-size: 38px;
`;

// keyframs를 통해 애니메이션 동작을 구현 할 수 있다.
const rotaitionAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

//${Emoji}를 통해 컴포넌트를 타켓팅 할 수도 있다. 단, 부모 컴포넌트(Box) 하위 요소만 타켓팅 한다.
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  animation: ${rotaitionAnimation} 1s linear infinite;
  ${Emoji} {
    font-size: 30px;
  }
  & :hover {
    font-size: 60px;
  }
  & :active {
    opacity: 0;
  }
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// Box에 스타일을 상속 받을 수 있다.
const Circle = styled(Box)`
  border-radius: 50px;
`;

// attrs로 속성을 정할 수 있다.
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
