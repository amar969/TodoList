import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getInProgressPersonal } from "../Redux/action";

export const Personal = () => {
  let dispatch = useDispatch();

//   React.useState(() => {
//     dispatch(getInProgressPersonal());

//   }, []);

//   const inProgress = useSelector((state) => state.inProgress);
//   const todo = useSelector((state) => state.todo);
//   const done = useSelector((state) => state.done);
//   console.log(inProgress);
//   console.log(todo);
//   console.log(done);


let [personalTodoCount, setPersonalTodoCount] = React.useState(0);
  let [personalInProgress, setPersonalInProgressCount] = React.useState(0);
  let [personalDone, setPersonalDoneCount] = React.useState(0);

  const getOther = async () => {
    try {
      let res1 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo&todo_tag=Personal"
      );
      let data1 = await res1.json();
      console.log(data1.length);
      setPersonalTodoCount(data1.length);
    } catch (error) {
      console.log(error);
    }

    try {
      let res2 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress&todo_tag=Personal"
      );
      let data2 = await res2.json();
      console.log(data2.length);
      setPersonalInProgressCount(data2.length);
    } catch (error) {
      console.log(error);
    }

    try {
      let res3 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Done&todo_tag=Personal"
      );
      let data3 = await res3.json();
      console.log(data3.length);
      setPersonalDoneCount(data3.length);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getOther();
  }, []);


  return (
    <>
      <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}
        >
        <Box
          sx={{
              width: "30%",
              borderRight: "2px solid black",
              height: "800px",
            }}
            >
          <Sidebar />
        </Box>

        <Box
          sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems:"flex-start",
              marginTop:"50px",
              marginLeft: "50px",
              fontSize:"25px"
            }}
            >
            <h1  style={{ textAlign: "left", marginBottom:"50px"}} >Personal</h1>
        <h3>Summary</h3>
          <div style={{ border:"2px solid black", padding: "10px", borderRadius:"10px", marginTop:"10px" }} >Todo - {personalTodoCount}</div>

          <div style={{ border:"2px solid black", padding: "10px", borderRadius:"10px", marginTop:"10px" }} >In Progress - {personalInProgress}</div>

          <div style={{ border:"2px solid black", padding: "10px", borderRadius:"10px", marginTop:"10px" }}  >Done - {personalDone}</div>
        </Box>
      </Box>

    </>
  );
};
