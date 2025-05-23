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

// styled-components nesting 문법2 #2.5
const Smile = styled.span``;
const SmileBox = styled(Box)`
  ${Smile} {
    font-size: 16px;
    &:hover {
      font-size: 32px;
    }
  }
`;

// styled-components ThemesProvider로 themes 설정하기 #2.7
const ThemeBox = styled.div`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid black;
  padding: 10px;
  margin: 2px;
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
      <SmileBox bgColor="yellow">
        <Smile as="p">😀</Smile>
      </SmileBox>
      <ThemeBox> Theme Provider를 활용하여 darkTheme, lightTheme을 설정할 수 있다. </ThemeBox>
    </Father>
  );
}
/* 
📍 JSX
34. as를 활용하여 html 태그 바꾸기 #2.3
 */
export default App;
