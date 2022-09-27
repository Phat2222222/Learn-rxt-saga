import { Button, HStack, Input, Select } from "@chakra-ui/react";
import { ListParams } from "models/common";
import { ChangeEvent } from "react";
import { MdSupportAgent } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { params } from "store/studentSlice";

interface Props {
  onSearchAge: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchName: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchGender: (e: ChangeEvent<HTMLSelectElement>) => void;
}
export default function FilterContainer({ onSearchAge, onSearchName, onSearchGender }: Props) {
  const navigate = useNavigate();
  const parameter = useSelector(params);
  return (
    <HStack spacing={3}>
      {/* Seach name */}
      <Input
        placeholder="Name"
        border="2px"
        onChange={onSearchName}
        minW={500}
        value={parameter.name}
      />

      {/* Search Gender */}
      <Select placeholder="Gender" onChange={onSearchGender} value={parameter.gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>

      {/* Search Age */}
      <Input
        placeholder="Age"
        type="number"
        border="2px"
        onChange={onSearchAge}
        value={parameter.age}
      />
      <Input placeholder="Mark" type="number" border="2px" onChange={onSearchAge} />
      <Button colorScheme="blue" onClick={() => navigate("/add-student")}>
        +
      </Button>
    </HStack>
  );
}
