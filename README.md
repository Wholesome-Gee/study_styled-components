# STYLED-COMPONENTS 강의 내용 정리

📍 강의 사이트 : NOMAD CORDER  
📍 강의 제목 : React JS 마스터클래스  
📍 강의 챕터 : #2 STYLED COMPONENTS

---

### #2.1

**📗 styled-components 설치하기**  
**📗 styled-components 기본 작성법**

---

### #2.2

**📗styled-components props를 사용하기**  
**📗styled-components extends(확장)**

- `` const Box = styled.div`background-color: ${ (props)=>props.bgColor } ``
- JSX에서 `<Box bgColor="red">`

---

### #2.3

**📗styled-components as를 사용하여 html 태그 교체하기**

- `<Btn as='a' href='/'/>`

**📗styled-components attrs를 사용하여 html 태그 속성 부여하기**

- `` const Input = styled.input.attrs({required:true})`...`  ``

---

### #2.4

**📗styled-components 애니메이션 사용하기**

- `import {keyframes} from 'styled-components'`
- `` const animationName = keyframes` 0% {...} 100% {...}`  ``
- `` const AnimationBox = styled.div`... animation: ${animationName} 1s linear infinite` ``

**📗styled-components nesting 문법**

- `` const NestingBox = styled.div`... span{...} &:hover{...}` ``

---

### #2.5

**📗styled-components nesting 문법2**

- nesting 문법에서 html tag 말고 styled component를 select 할땐 ${컴포넌트명}

  ```js
  const Smile = styled.span``;
  const SmileBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: orange;
    ${Smile} {
      font-size: 16px;
      &:hover {
        font-size: 32px;
      }
    }
  `;
  ...
  <SmileBox>
    <Smile>😀</Smile>
  </SmileBox>
  ```

  ### #2.7

  **📗styled-components에서 themeProvider를 활용하여 darkTheme/lightTheme 설정하기**

  - index.js 설정

    ```js
    import { ThemeProvider } from "styled-components";

    const darkTheme = {
      textColor: "white",
      backgroundColor: "black",
    };
    const lightTheme = {
      textColor: "black",
      backgroundColor: "white",
    };
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(
      <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    );
    ```

  - Component에서 props.theme.lightTheme / darkTheme 사용하기
    ```js
    const ThemeBox = styled.div`
      width: 300px;
      height: 100px;
      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.backgroundColor};
      border: 1px solid black;
      padding: 10px;
      margin: 2px;
    `;
    ...
    <ThemeBox> I have Theme </ThemeBox>
    ```
