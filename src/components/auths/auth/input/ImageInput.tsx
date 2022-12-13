import React, { useState } from "react";
import { ERROR_MESSAGE } from "constants/authErrors";
import * as S from "../../../common/Style";

const ImageInput = ({ errors, register }: any) => {
  const [image, setImage] = useState("images/background.png");

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      {errors.file && <S.ErrorMessage> {ERROR_MESSAGE.FILE} </S.ErrorMessage>}
      <S.ImageContainer>
        <S.ImageShowingContainer>
          <S.ImageShowing src={image} />
        </S.ImageShowingContainer>
        <S.ImageSearchButtonForShow>
          사진 선택
          <S.ImageSearchButton
            type="file"
            accept="image/*"
            {...register("file", {
              required: true,
              onChange: (e: any) => {
                uploadImage(e);
              },
            })}
          />
        </S.ImageSearchButtonForShow>
      </S.ImageContainer>
    </>
  );
};

export default ImageInput;
