import styled from "styled-components"; // npm i styled-components
import { keyframes } from "styled-components"; // animation 사용 전 keyframes를 import

// styled-components 기본 선언 및 사용법 #2.1
const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

// styled-components props 사용방법 #2.2
const Box = styled.div`
  background-color: ${(props) => props.bgColor}; // <Box bgColor='tomato'/>
  width: 100px;
  height: 100px;
  margin: 2px;
`;

// styled-components extends(확장,상속) 사용방법 #2.2
const Circle = styled(Box)`
  border-radius: 50px;
`;

// styled-components 'as'를 사용하여 html태그 바꾸기 (JSX 34번 line) #2.3
const Btn = styled.button`
  color: white;
  background-color: chocolate;
  width: 100px;
  padding: 10px 0;
  margin: 2px;
  text-align: center;
  border: none;
  border-radius: 15px;
`;

// styled-components 'attrs'를 사용하여 html 태그에 속성 추가하기 #2.3
const Input = styled.input.attrs({ placeholder: "attrs를 사용하여 html태그 속성 추가하기 #2.3" })`
  width: 300px;
  padding: 10px 0;
  background-color: skyblue;
  margin: 2px;
`;

// styled-components animation 사용하기 #2.4
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const AnimationBox = styled(Box)`
  animation: ${rotationAnimation} 1s linear infinite;
`;

// styled-components nesting 문법 #2.4
const NestingBox = styled(Box)`
  span {
    color: white;
  }
  &:hover {
    background-color: orange;
  }
`;

// JSX
function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Button</Btn>
      <Btn as="a" href="/">
        Anchor
      </Btn>
      <Input />
      <AnimationBox bgColor="olive" />
      <NestingBox bgColor="black">
        <span>Hello</span>
      </NestingBox>
    </Father>
  );
}
/* 
📍 JSX
34. as를 활용하여 html 태그 바꾸기 #2.3
 */
export default App;
