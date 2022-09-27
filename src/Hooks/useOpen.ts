import { useState } from "react";

export default function useOpen() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

//   function handleOpen() {
//     setOpen(!open);
//   }

  return { open, handleOpen };
}
