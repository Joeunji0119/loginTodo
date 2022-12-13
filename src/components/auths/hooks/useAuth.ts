/* eslint-disable import/extensions */
import React, { useState } from "react";

const useAuth = () => {
  const [toogle, setToogle] = useState(true);

  const PageStatus = toogle ? "로그인" : "회원가입";
  const statusButton = toogle ? "회원가입하기" : "로그인하기";

  const navi = toogle
    ? {
        onClick: () => {
          setToogle((pre) => !pre);
        },
      }
    : {
        onClick: () => {
          setToogle((pre) => !pre);
        },
      };

  return {
    PageStatus,
    toogle,
    setToogle,
    navi,
    statusButton,
  };
};

export default useAuth;
