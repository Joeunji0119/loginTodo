/* eslint-disable import/extensions */
import React, { useState } from "react";

const useAuth = () => {
  const [toogle, setToogle] = useState(true);

  const PageStatus = toogle ? "로그인" : "회원가입";
  const statusButton = toogle ? "회원가입하기" : "로그인하기";

  const handleToogle = () => {
    setToogle((pre) => !pre);
  };

  return {
    PageStatus,
    toogle,
    setToogle,
    handleToogle,
    statusButton,
  };
};

export default useAuth;
