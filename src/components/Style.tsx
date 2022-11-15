import styled from "@emotion/styled";

export const BackgroundColor = styled.div`
  background-color: #f0f2f5;
  width: 100vw;
  height: 100vh;
`;

export const AuthLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 90;
`;

export const Logo = styled.div`
  margin-bottom: 40px;
  font-size: 50px;
  color: #051527;
  font-weight: 800;
`;

export const LoginContainer = styled.div`
  width: 400px;
  min-height: 200px;
  border-radius: 17px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 2px 2px 5px 2px #dadce0;
`;
export const LoginTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 700;
  border-bottom: 1px solid #f6f6f6;
  background-color: #fafafa;
`;
export const NameInput = styled.input`
  height: 35px;
  border: 2px solid #f0f2f5;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;

export const IdInput = styled(NameInput)``;
export const PassWordInput = styled(NameInput)``;
export const SubmitButton = styled.button`
  background-color: #f5f5f5;
  height: 35px;
  border: 2px solid #f0f2f5;
  border-radius: 7px;
`;

// TODO : 드롭다운 컴포넌트

export const Gender = styled.div`
  height: 30px;
  margin-bottom: 20px;
`;

export const Female = styled.select`
  border: 2px solid #f0f2f5;
  font-size: 14px;
  height: 100%;
  width: 100px;
  margin-right: 3px;
`;

// 여기까지 Gender

export const Birth = styled.input`
  height: 30px;
  margin-bottom: 20px;
  border: 2px solid #f0f2f5;
`;

// TODO : 이미지 파일 컴포넌트

export const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageShowing = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid #f0f2f5;
  margin-bottom: 10px;
`;

export const ImageSearchButton = styled.input`
  visibility: hidden;
`;

export const ImageSearchButtonForShow = styled.label`
  width: 100px;
  height: 25px;
  display: inline-block;
  background: #f0f2f5;
  font-size: 13px;
  border-radius: 7px;
  cursor: pointer;
`;

export const GotoLoginBtn = styled.div`
  background-color: #f5f5f5;
  height: 35px;
  border: 2px solid #f0f2f5;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

// Todo Style

export const TodoInput = styled.input``;

export const Test = styled.div`
  width: 200px;
  height: 1000px;
  background: red;
`;
