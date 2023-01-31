import { RegisterProps } from "constants/types";
import * as Drop from "./Style";

const GENDER_DATA = [
  { label: "남성", value: "남성" },
  { label: "여성", value: "여성" },
  { label: "기타", value: "기타" },
];

const DropBox = ({ register }: RegisterProps) => {
  return (
    <Drop.Gender>
      <Drop.Female {...register("gender")}>
        {GENDER_DATA.map((el) => {
          return <option key={el.label}>{el.value}</option>;
        })}
      </Drop.Female>
    </Drop.Gender>
  );
};

export default DropBox;
