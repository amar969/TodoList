import React from "react";
import { InputTask } from "./InputTask";

export const Todo = () => {
  const data = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false },
  ];

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        {data.map((el) => {
          return (
            <ul>
              <l1 style={el.status ? { color: "green" } : { color: "red" }}>
                <strong>{el.title}</strong>
              </l1>
            </ul>
          );
        })}
        <InputTask /> 
      </div>
    </>
  );
};
