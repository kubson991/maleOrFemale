import brazo from "./assets/balanz.png";
import base from "./assets/xd.png";
import { useEffect } from "react";
import { useState } from "react";

const Balance = ({ sex = "" }) => {
  const [actualState, setActualState] = useState("");
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    if (sex) {
      switch (actualState) {
        case "":
          if (sex === "male") {
            setAnimation("zeroToMale");
            setActualState("male");
          } else {
            setAnimation("zeroToFemale");
            setActualState("female");
          }
          break;
        case "male":
          if (sex === "male") {
          } else {
            setAnimation("maleToFemale  ");
            setActualState("female");
          }
          break;
        case "female":
          if (sex === "male") {
            setAnimation("femaleToMale");
            setActualState("male");
          } else {
          }
          break;
      }
    }
  }, [sex]);
  return (
    <div className="image">
      <img src={base} alt="icon" />
      <img className={animation} src={brazo} alt="" />
    </div>
  );
};
export default Balance;
