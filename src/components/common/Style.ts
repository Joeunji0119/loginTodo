import styled from "@emotion/styled";

export const BackgroundColor = styled.div`
  background-color: #f0f2f5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin-bottom: 40px;
  font-size: 50px;
  color: #051527;
  font-weight: 800;
`;

export const LoginContainer = styled.main`
  width: 400px;
  border-radius: 17px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  background-color: white;
  box-shadow: 2px 2px 5px 2px #dadce0;
  border-radius: 5px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LoginTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 5px;
  font-weight: 700;
  border-bottom: 1px solid #f6f6f6;
  background-color: #fafafa;
  border-radius: 5px;
`;

export const NameInput = styled.input`
  height: 35px;
  border: 2px solid #f0f2f5;
  margin-bottom: 20px;
  border-radius: 7px;
  &:focus {
    outline: none;
  }
`;

export const IdInput = styled(NameInput)``;

export const PassWordInput = styled(NameInput)``;

export const SubmitButton = styled.button`
  background-color: ${(css) => css.theme.buttonColor};
  height: 35px;
  border: 2px solid #f0f2f5;
  border-radius: 7px;
`;

export const Birth = styled.input`
  height: 30px;
  margin-bottom: 20px;
  border: 2px solid #f0f2f5;
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: ${(css) => css.theme.blue};
`;

// TODO : 이미지 파일 컴포넌트

export const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageShowingContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid #f0f2f5;
  margin-bottom: 10px;
  border-radius: 9999px;
`;

export const ImageShowing = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
`;

export const ImageSearchButton = styled.input`
  visibility: hidden;
`;

export const ImageSearchButtonForShow = styled.label`
  width: 100px;
  height: 25px;
  position: absolute;
  z-index: 30;
  bottom: 51%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 7px;
  background: #f0f2f5;
  font-size: 10px;
  border-radius: 7px;
  cursor: pointer;
`;

export const GotoLoginBtn = styled.div`
  background-color: ${(css) => css.theme.buttonColor};
  height: 35px;
  border: 2px solid #f0f2f5;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

// TodoPage Style
export const TodoInput = styled.input`
  height: 30px;
  width: 300px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

export const TodoDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  min-height: 100px;
  margin-top: 50px;
  overflow-y: scroll;
  max-height: 450px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Todos Style

export const TodosLayout = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 27px;
`;

export const TodoCreateButton = styled.button`
  width: 40px;
  border-radius: 5px;
  background: #f0f2f5;
  font-size: 14px;
`;

export const TodoCreatContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TodoText = styled.input`
  height: 25px;
  width: 250px;
  margin-right: 5px;
  border: none;
  border-bottom: 1px solid black;

  &:focus {
    outline: none;
  }
`;

export const ModifyButton = styled.button`
  width: 27px;
  font-size: 13px;
  margin-left: 5px;
  border-radius: 5px;
  padding: 2px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #f0f2f5;
  }
`;

export const DeleteButton = styled(ModifyButton)``;
