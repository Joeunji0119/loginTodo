import { GetTodoUserQuery } from "components/todos/api/handleQueryTodos";

import * as S from "./Style";

const Header = () => {
  const { data } = GetTodoUserQuery();
  return (
    <S.Layout>
      <S.Logo>TODOLIST</S.Logo>
      {/* <S.Together> 📆 Day {data?.data?.together} </S.Together>
      <S.HeaderUserInfo>
        <S.UserImgLabel>
          <S.UserImg src={data?.data.imgUrl} />
        </S.UserImgLabel>
        <S.HeaderNameLabel>
          <S.Name>{data?.data?.name}</S.Name> */}
          <S.NameToHiText>님, 환영합니다 🥰 </S.NameToHiText>
        {/* </S.HeaderNameLabel> */}
      {/* </S.HeaderUserInfo> */}
    </S.Layout>
  );
};

export default Header;
