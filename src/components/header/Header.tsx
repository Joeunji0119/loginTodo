import { GetTodoUserQuery } from "components/todos/api/handleQueryTodos";
import { useNavigate } from "react-router";

import * as S from "./Style";

const Header = () => {
  const navigate = useNavigate();
  const { data } = GetTodoUserQuery();
  const toLogout = () => {
    // eslint-disable-next-line no-alert
    alert("로그아웃 되었습니다 👋👋");
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    <S.Layout>
      <S.Logo>TODOLIST</S.Logo>
      <S.Together> 📆 Day {data?.data?.together} </S.Together>
      <S.HeaderUserInfo>
        <S.UserImgLabel>
          <S.UserImg src={data?.data.imgUrl} />
        </S.UserImgLabel>
        <S.HeaderNameLabel>
          <S.Name>{data?.data?.name}</S.Name>
          <S.NameToHiText>님, 환영합니다 🌈 </S.NameToHiText>
        </S.HeaderNameLabel>
      </S.HeaderUserInfo>
      <S.Logout onClick={toLogout}>로그아웃</S.Logout>
    </S.Layout>
  );
};

export default Header;
