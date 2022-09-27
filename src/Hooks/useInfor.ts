import { useState } from "react";
export default function useInfor() {
  const [infor, setInfor] = useState("");

  const handleInfor = (data:string) => {
    setInfor(data);
  };

  //   function handleOpen() {
  //     setOpen(!open);
  //   }

  return { infor, handleInfor };
}
