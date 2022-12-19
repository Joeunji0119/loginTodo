# ✍️ TodoList

</br>

> 학습 목적으로 백엔드 동료과 함께 TodoList 구현
>
> #### [배포링크](https://joeunji0119.github.io/loginTodo/)

</br>

### 프로젝트 팀 구성

> #### [FRONT END 1명](https://github.com/Joeunji0119/loginTodo)
>
> #### [BACK END 1명](https://github.com/sw1104/todo-server-api)

</br>
</br>

#

</br>

## 📆 구현 목록 & 구현 영상

![signin 에러 2](https://user-images.githubusercontent.com/95282989/207857440-cb7b1631-3ac9-4b90-9db6-9875f804a75b.GIF) ![signup 2](https://user-images.githubusercontent.com/95282989/207857460-5e5e26d5-c92c-408f-bf96-4204aaa6ba6e.GIF)

#### 1. SignIn / SignUp

- [x] localStorage를 이용한 회원가입, 로그인 구현
- [x] 폼 입력시 유효성 검사
- [x] 로그인, 회원가입 실패시 에러 메세지 모달 구현

</br>
</br>

![화면 기록 2022-12-14 오후 10 23 20](https://user-images.githubusercontent.com/95282989/207857023-c53a1f94-ebfd-49db-a594-82ee50ec571f.GIF)

#### 2. TodoList

- [x] TodoList 추가 / 수정 / 삭제 기능 구현
- [x] 해당 todo 체크시 밑줄
- [x] todoList 길어질 시 스크롤 생성
- [x] header에 로그아웃 기능 구현

</br>

</br>

## 🌈 사용 라이브러리

</br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

<img src="https://img.shields.io/badge/Emtion.js-96588A?style=for-the-badge&logo=React Query&logoColor=white"/> <img src="https://img.shields.io/badge/Hook Form-EC5990?style=for-the-badge&logo=React Query&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white"/>

</br>

---

</br>

</br>

## 📦 폴더 구조

```
📂 src
│  ├─ App.tsx
│  ├─ 📂 components
│  │  ├─ 📂 auths
│  │  │  ├─ 📂 api
│  │  │  │  └─ authAxios.ts
│  │  │  ├─ 📂 auth
│  │  │  │  ├─ AuthForm.tsx
│  │  │  │  └─ 📂 input
│  │  │  │     ├─ BirthInput.tsx
│  │  │  │     ├─ EmailInput.tsx
│  │  │  │     ├─ ImageInput.tsx
│  │  │  │     ├─ NameInput.tsx
│  │  │  │     └─ PasswordInput.tsx
│  │  │  ├─ 📂 dropBox
│  │  │  │  ├─ DropBox.tsx
│  │  │  │  └─ Style.ts
│  │  │  ├─ 📂 hooks
│  │  │  │  └─ useAuth.ts
│  │  │  └─ 📂 modal
│  │  │     ├─ Errormodal.tsx
│  │  │     └─ Style.ts
│  │  ├─ 📂 common
│  │  │  └─ Style.ts
│  │  ├─ 📂 header
│  │  │  ├─ Header.tsx
│  │  │  └─ Style.ts
│  │  └─ 📂 todos
│  │     ├─ TodoPage.tsx
│  │     ├─ Todos.tsx
│  │     └─ 📂 api
│  │        ├─ handleQueryTodos.ts
│  │        └─ todoAxios.ts
│  ├─ 📂 constants
│  │  ├─ authErrors.ts
│  │  └─ types.ts
│  ├─ index.tsx
│  ├─ 📂 pages
│  │  ├─ Auth.tsx
│  │  └─ Todo.tsx
│  └─ styles
│     ├─ GlobalStyle.ts
│     └─ theme.ts
```

</br>

## 회원가입 폼 구현

```typescript

// src/components/auths/auth/input/EmailInput.tsx


...

  <>
    {errors.email && <S.ErrorMessage> {errors.email?.message} </S.ErrorMessage>}
    <S.IdInput
      {...register("email", {
        pattern: {
          message: ERROR_MESSAGE.EMAIL,
          value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        },
      })}
      placeholder=" 이메일을 입력하세요"
    />
  </>

...

// src/constants/authErrors.ts

export const ERROR_MESSAGE = {
  FILE: "❗️ 사진 업로드는 필수입니다",
  NAME_MAX: "이름은 10글자 이상 입력할 수 없습니다",
  NAME_MIN: "2글자 이상 입력하세요",
  EMAIL: " 이메일 형식 영문자, 숫자, '@' 와 '.'이 필요합니다",
  PASSWORD: "비밀번호는 영문/숫자 혼합, 8자 이상 20자 이하입니다.",
};


```

`react-hook-form` 의 register, error를 사용해 유효성 검사와 에러 메세지를 띄우도록 했고 이는 모달로 구현했습니다. 또한 후에 에러 메세지를 쉽게 수정할 수 있도록 `constants/authErrors.ts` 파일에 모아두었습니다.

</br>

## TodoList 구현

```typescript

// src/components/todos/auth/api/handleQueryTodos.ts


...

 export const GetTodoQuery = () => {
  return useQuery({
    queryKey: ["getTodoListDatas"],
    queryFn: getDataAxios,
  });
};

export const GetTodoUserQuery = () => {
  return useQuery({
    queryKey: ["getTodoUserData"],
    queryFn: getUserDataAxios,
  });
};

...


```

`useQuery` 를 사용해 header, todoList 정보를 불러왔습니다.
