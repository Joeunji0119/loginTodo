import { RegisterProps } from "constants/types";
import * as S from "../../../common/Style";

const BirthInput = ({ register }: RegisterProps) => {
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
