import { Box, Button } from "@chakra-ui/react";
import { ListParams, PaginationResponse } from "models/common";
import { useDispatch } from "react-redux";
import { setParams } from "store/studentSlice";

interface Props {
  pagination: PaginationResponse;
  onChangePage: (page: number) => void;
}

export default function Pagination({ pagination, onChangePage }: Props) {
  console.log(pagination);
  const { _limit, _page, _totalRows } = pagination;

  const totalPages = Math.ceil(_totalRows / _limit);
  console.log(totalPages);

  const dispatch = useDispatch();
  return (
    <Box padding={2} display="flex" justifyContent="center">
      {new Array(totalPages).fill(null).map((_, index: number) => (
        <Button
          key={index}
          mr={2}
          bg={`${_page === index + 1 ? "gray" : null}`}
          onClick={() => onChangePage(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </Box>
  );
}
