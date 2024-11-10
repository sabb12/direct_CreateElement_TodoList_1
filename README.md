## Project Introduction(프로젝트 소개)
##### ▪ Direct HTML Generation Using createElement(createElement을 이용한 직접 HTML 생성)로 만든 To Do List
<br/>

## What I've learned(배운 점)
#### CreateElement을 이용한 직접 HTML생성 방법은 "직접으로 추가된 요소들": 
##### 1. HTML(index.html)파일을 사용하지 않고 JavaScript를 사용해 동적으로 HTML 요소를 생성(DOM 조작)하는 방법을 알게 됨
##### 2. creatElement, classList.add("className"), setAttribute, append 및 appendChild 사용 및 차이점을 배움
##### - createElement: 새로운 HTML 요소를 동적으로 생성
```Javascript
// <div></div> 생성
const addButton = document.createElement("button"); 
});
```
##### - classList.add(): 클래스 이름을 HTML 요소에 추가하는 메서드
```Javascript
const addButton = document.createElement("button");
// <div class="addBtn"></div>
addButton.classList.add("addBtn");
});
```
##### - setAttribute: HTML 요소에 속성(attribute)을 설정하거나 변경하는 메소드
```Javascript
const addButton = document.createElement("button");
// <div class="addBtn" id="addTodoBtn"></div>
addButton.setAttribute("id", "addTodoBtn"); // 속성 추가
// <div class="submitBtn" id="addTodoBtn"></div>
addButton.setAttribute("class", "submitBtn"); // 속성 변경
});
```
##### - append: 하나 이상의 자식 요소 또는 텍스트를 부모 요소에 추가 가능
```Javascript
const container = document.createElement("div");
const addButton = document.createElement("button");
const todoDiv = document.createElement("div");

container.append("using append", addButton, document.createElement("div"));
document.body.append(container);
});
```
##### - appendChild: 한나의 자식 요소를 부모 요소에 추가 가능
```Javascript
const container = document.createElement("div");
const addButton = document.createElement("button");

container.appendChild(addButton);
document.body.appendChild(container);
});
```
<br/>

## Key Feature(주요 기능)
### 1. 할 일 추가 기능
##### ▪ 사용자가 입력창(.input)에 텍스트를 입력하고 Enter 키를 누르거나, addBtn 버튼을 클릭하면 새로운 할 일(todo) 항목이 추가됨.
<br/>

### 2. 할 일 삭제 기능
##### ▪ 각 할 일에는 삭제 버튼이 포함되어 있으며, 사용자가 이 버튼을 클릭하면 해당 항목이 삭제됨.
<br/>

### 3. 완료 체크박스 기능
##### ▪ 사용자가 체크박스를 클릭하면 할 일의 checked 상태가 업데이트되며, 해당 항목이 "To Do" 목록에서 "Done" 목록으로 이동합니다(또는 반대로 이동).
<br/>

### 4. 할 일 수정 기능
##### ▪ 새로운 ToDo 항목 추가 시 input은 disabled=false로 시작합니다.
##### ▪ 수정 버튼 클릭 시 버튼이 "저장"으로 바뀌고, input은 disabled=true로 변경됩니다.
##### ▪ 저장 후 버튼이 "수정"으로 돌아가고, input은 다시 disabled=false로 돌아갑니다.
<br/>

## Stacks(사용 스택)
### - Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
<br/>

### - Development
- Languages

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
<br/>

## Project View(화면 구성)
![image](https://github.com/user-attachments/assets/9e029fc2-c461-4c7d-a5f9-83238a925576)


## Project Structure(프로젝트 구조)
```markdown
createElement_todoList_1
├── index.css
├── index.html
├── index.js
├── README.md
```
