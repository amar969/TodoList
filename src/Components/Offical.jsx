import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdone, getInProgress, getTodo } from "../Redux/action";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export const Offical = () => {
  let dispatch = useDispatch();

  //   React.useState(() => {
  //     dispatch(getInProgress());
  //     dispatch(getTodo());
  //     dispatch(getdone());
  //   }, []);

  //   const inProgress = useSelector((state) => state.inProgress);
  //   const todo = useSelector((state) => state.todo);
  //   const done = useSelector((state) => state.done);
  //   console.log(inProgress);
  //   console.log(todo);
  //   console.log(done);

  let [officalTodoCount, setOfficalTodoCount] = React.useState(0);
  let [officalInProgress, setOfficalInProgressCount] = React.useState(0);
  let [officalDone, setOfficalDoneCount] = React.useState(0);

  const getOther = async () => {
    try {
      let res1 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo&todo_cate=Offical"
      );
      let data1 = await res1.json();
      console.log(data1.length);
      setOfficalTodoCount(data1.length);
    } catch (error) {
      console.log(error);
    }

    try {
      let res2 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress&todo_cate=Offical"
      );
      let data2 = await res2.json();
      console.log(data2.length);
      setOfficalInProgressCount(data2.length);
    } catch (error) {
      console.log(error);
    }

    try {
      let res3 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Done&todo_cate=Offical"
      );
      let data3 = await res3.json();
      console.log(data3.length);
      setOfficalDoneCount(data3.length);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getOther();
  }, []);

  return (
    <>
      <h1>Offical</h1>
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
            alignItems: "flex-start",
            marginTop: "50px",
            marginLeft: "50px",
            fontSize: "25px",
          }}
        >
          <h3>Summary</h3>
          <div
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Todo - {officalTodoCount}
          </div>

          <div
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            In Progress - {officalInProgress}
          </div>

          <div
            style={{
              border: "2px solid black",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Done - {officalDone}
          </div>
        </Box>
      </Box>
    </>
  );
};
