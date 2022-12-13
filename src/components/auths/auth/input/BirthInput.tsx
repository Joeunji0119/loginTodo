import * as S from "../../../common/Style";

const BirthInput = ({ register }: any) => {
  return (
    <S.Birth
      type="date"
      {...register("birth", {
        value: "2022-01-01",
      })}
      placeholder=" 생년월일"
    />
  );
};

export default BirthInput;
