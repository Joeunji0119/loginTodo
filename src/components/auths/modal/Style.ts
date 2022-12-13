/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 110;
`;
export const Layout = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 7px;
  background: ${(css) => css.theme.grey};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
export const ErrorMessage = styled.div`
  color: ${(css) => css.theme.black};
`;
export const GoBackButton = styled.button`
  background: ${(css) => css.theme.buttonColor};
  width: 50px;
  height: 30px;
  font-size: 13px;
  border-radius: 7px;
`;
