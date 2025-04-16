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
