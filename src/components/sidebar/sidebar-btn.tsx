import { Button, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { changeMasthead } from "store/pageSlice";
import { useDispatch } from "react-redux";

interface Props {
  name: string;
  icon: ReactElement;
  url: string;
}

export default function SidebarBtn({ name, icon, url }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Button
      leftIcon={icon}
      w="100%"
      fontSize="xl"
      mb={2}
      onClick={() => {
        navigate(url);
        localStorage.setItem("path", name);
        // dispatch(changeMasthead(name));
      }}
    >
      <Text display={{base:"none", md:"block"}}>{name}</Text>
    </Button>
  );
}
