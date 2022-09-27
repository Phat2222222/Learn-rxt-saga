import { Box, Button, Divider, Input, Select, Text, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, ReactNode } from "react";
import studentApi from "api/studentApi";
import { Student } from "models/students";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactDOM from "react-dom";
import useInfor from "../Hooks/useInfor";
interface IFormInputs {
  name: string;
  age: number;
  gender: string;
  mark: number;
}

// const getErrorMessages= ({ path, message, inner }:{path:any, message:any,inner:any}) => {
//   if (inner && inner.length) {
//     return inner.reduce((acc:any, { path, message }:{path:any,message:any})=> {
//       acc[path] = message;
//       return acc;
//     }, {});
//   }

// , val => !isNaN(val) && `${val}`.length <= 6

// let errors = [];
// try {
//   schema.validateSync({  name: "111" });
// } catch (err) {
//   errors.push(getErrorMessages(err));
// }
// try {
//   schema.validateSync({ name: "" });
// } catch (err) {
//   errors.push(getErrorMessages(err));
// }

//   return { [path]: message };
// };

export default function EditStudent() {
  const { studentId } = useParams();
  const { infor, handleInfor } = useInfor();
  const toast = useToast();

  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    if (!studentId) return;
    (async () => {
      try {
        const res: Student = await studentApi.getDetail(studentId);
        setStudent(res);
      } catch (error: any) {
        toast({
          title: "Failed to get student's infomation",
          status: "error",
          duration: 3000,
          position: "top",
        });
      }
    })();
  }, []);



  console.log("Re-render");

  useEffect(() => {
    if (student) {
      setValue("name", student.name);
      setValue("age", student.age);
      setValue("gender", student.gender);
      setValue("mark", student.mark);
    }
  }, [student]);

  // react-hook-form
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Must be fill")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),

    age: yup
      .number()
      .test("test-empty", "Must be fill", (value) => {
        if (value?.toString() === "") return false;
        return true;
      })
      .required("Must be fill"),
    gender: yup.string().required(),
    mark: yup.number().required().positive("PLease fill positive"),
  });
  //yup in react hook form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any, id: string | undefined) => {
    if (id) {
      try {
        await studentApi.updateStudent(id, data);
        toast({
          title: "Update success",
          status: "success",
          duration: 3000,
          position: "top",
        });
      } catch (error) {
        toast({
          title: "Failed to update student",
          status: "error",
          duration: 3000,
          position: "top",
        });
      }
    } else {
      
      try {
        await studentApi.addStudent(data)
        toast({
          title: " Success",
          status: "success",
          duration: 3000,
          position: "top",
        });
      } catch (error) {
        toast({
          title: "Failed to add student",
          status: "error",
          duration: 3000,
          position: "top",
        });
      }
    }
  };

  return (
    <Box p={2} w="300px">
      <form onSubmit={handleSubmit((data) => onSubmit(data, studentId))} style={{ width: "100%" }}>
        <Text>Name</Text>
        <Input
          htmlSize={4}
          mb={3}
          //value={student?.name}
          {...register("name")}
          // onChange={(e) => handleInfor(e.target.value)}
        />
        <Text color="red">{errors.name?.message}</Text>
        <Text>Age</Text>
        <Input htmlSize={4} mb={3} {...register("age")} />
        <Text color="red">{errors.age?.message}</Text>
        <Text>Gender</Text>
        <Select placeholder="Gender" mb={3} {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Text color="red">{errors.gender?.message}</Text>
        <Text>Mark</Text>
        <Input htmlSize={4} mb={3} {...register("mark")} />
        <Text color="red">{errors.mark?.message}</Text>
        <Box mt={2}>
          <Button mr={2} type="submit" isLoading={isSubmitting} loadingText="Submitting">
            Submit
          </Button>
          <Button>Cancel</Button>
        </Box>
      </form>
    </Box>
  );
}
