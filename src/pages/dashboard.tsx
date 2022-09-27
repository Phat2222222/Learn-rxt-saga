import { Box } from "@chakra-ui/react";
import FilterContainer from "components/students/filter-container";
import React, { ChangeEvent } from "react";

export default function Dashboard() {
  const test1 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("1");
  };
  const test2 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("2");
  };
  const test3 = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("3");
  };
  return (
    <Box>
      <FilterContainer onSearchName={test1} onSearchAge={test2} onSearchGender={test3} />
    </Box>
  );
}
