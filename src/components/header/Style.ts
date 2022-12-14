/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";

export const Layout = styled.header`
  height: 50px;
  width: 100vw;
  position: sticky;
  background: white;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const HeaderNameLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImgLabel = styled.div`
  width: 38px;
  height: 38px;
  object-fit: cover;
`;

export const UserImg = styled.img`
  border-radius: 9999px;
  width: 100%;
  height: 100%;
`;

export const NameToHiText = styled.div`
  align-items: center;
  font-size: 10px;
  padding-left: 2px;
  padding-top: 3px;
`;

export const Name = styled.div`
  padding-left: 10px;
  font-size: 17px;
  font-weight: 500;
`;
export const Together = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
