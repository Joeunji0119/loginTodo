import { ERROR_MESSAGE } from "constants/authErrors";
import * as S from "../../../common/Style";

const NameInput = ({ register, errors }: any) => {
  return (
    <>
      {errors.name && <S.ErrorMessage> {errors.name?.message} </S.ErrorMessage>}
      <S.NameInput
        type="text"
        {...register("name", {
          required: true,
          maxLength: {
            value: 10,
            message: ERROR_MESSAGE.NAME_MAX,
          },
          minLength: {
            value: 2,
            message: ERROR_MESSAGE.NAME_MIN,
          },
        })}
        placeholder=" 이름을 입력하세요"
      />
    </>
  );
};

export default NameInput;
