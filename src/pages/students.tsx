import {
  Box,
  Button,
  ChakraProvider,
  Container,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Select,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Toast,
  Tr,
  useToast,
} from "@chakra-ui/react";
import studentApi from "api/studentApi";
import Pagination from "components/pagination";
import FilterContainer from "components/students/filter-container";
import { ListParams, ListResponse, PaginationResponse } from "models/common";
import { Student } from "models/students";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { list, pagination, params, setList, setPagination, setParams } from "store/studentSlice";
import SidebarBtn from "components/sidebar/sidebar-btn";
import { MdSpaceDashboard } from "react-icons/md";
import useOpen from "Hooks/useOpen";
export default function Students() {
  const [student, setStudent] = useState<Student | null>(null);
  const [refresh, setRefresh] = useState(false);
  const toast = useToast();
  //get API
  //const [list, setList] = useState<Student[]>([]); // tranfer array into getSt with initial value=[]
  //redux
  const listStudent = useSelector(list);
  const dispatch = useDispatch();

  //get data from API and send data that we want to give
  // const [pagination, setPagination] = useState<PaginationResponse | null>(null);
  const page = useSelector(pagination);
  const parameter = useSelector(params);
  // const [params, setParams] = useState<ListParams>({
  //   _limit: 5,
  //   _page: 1,
  // });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Get API
  useEffect(() => {
    const getListStudent = async () => {
      setIsLoading(true);
      const res: ListResponse<Student> = await studentApi.getAll(parameter);
      dispatch(setList(res.data));
      dispatch(setPagination(res.pagination));
      setTimeout(() => setIsLoading(false), 1000);
    };
    getListStudent();
  }, [parameter, refresh]);

  //high order component
  const handleSearchName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setParams({
        ...parameter,
        name: e.target.value,
      })
    );
  };

  const handleSearchAge = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setParams({
        ...parameter,
        age: e.target.value,
      })
    );
  };

  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setParams({
        ...parameter,
        gender: e.target.value,
      })
    );
  };

  const handleChangePage = (page: number) => {
    dispatch(
      setParams({
        ...parameter,
        _page: page,
      })
    );
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    try {
      await studentApi.deleteStudent(id);
      setRefresh(!refresh);
      toast({
        title: "Delete success",
        status: "success",
        duration: 3000,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Fail to delete",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };
  const navigate = useNavigate();
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const { open, handleOpen } = useOpen();
  return (
    <Box w="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box w="100%" position="relative">
        <FilterContainer
          onSearchAge={handleSearchAge}
          onSearchGender={handleChangeGender}
          onSearchName={handleSearchName}
        />
        <TableContainer border="1px" borderRadius="md" mt={2}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>AGE</Th>
                <Th>Mark</Th>
                <Th>Gender</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            {isLoading ? (
              <Tbody>
                {new Array(5).fill(null).map((_, index: number) => (
                  <Tr>
                    {new Array(7).fill(null).map((_, index: number) => (
                      <Td>
                        <Skeleton height="40px" />
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            ) : (
              <Tbody>
                {listStudent.map((it: Student, index: number) => (
                  <Tr key={it.id}>
                    <Td>{it.id}</Td>
                    <Td>{it.name}</Td>
                    <Td>{it.age}</Td>
                    <Td>{it.mark}</Td>
                    <Td>{it.gender}</Td>
                    <Td>
                      <Button colorScheme="teal" onClick={() => navigate(`/edit/${it.id}`)}>
                        Edit
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          handleOpen();
                          setStudent(it);
                        }}
                      >
                        Remove
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
        </TableContainer>

        <Modal isOpen={open} onClose={handleOpen}>
          <ModalOverlay bg="rgba(0,0,0,0.2)" />
          <ModalContent>
            <ModalHeader>Are you sure want to delete {student?.name} ?</ModalHeader>
            <ModalCloseButton />

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  handleOpen();
                  handleDelete(student?.id);
                }}
              >
                OK
              </Button>
              <Button colorScheme="red">Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {page && <Pagination pagination={page} onChangePage={handleChangePage} />}
      </Box>
    </Box>
  );
}
