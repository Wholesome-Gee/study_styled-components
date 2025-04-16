import styled from "styled-components"; // npm i styled-components

// styled-components 기본 선언 및 사용법 #2.1
const Father = styled.div`
  display: flex;
`;

// styled-components props 사용방법 #2.2
const Box = styled.div`
  background-color: ${(props) => props.bgColor}; // <Box bgColor='tomato'/>
  width: 100px;
  height: 100px;
`;

// styled-components extends(확장,상속) 사용방법 #2.2
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}
/* 
📍 JSX

 */
export default App;
