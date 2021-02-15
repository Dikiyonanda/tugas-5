import React, { useState } from "react";
import "./TodoListStyle.css";

export default function TodoList() {
  const [todo, setTodo] = useState([
    "Belajar react",
    "Membaca",
    "Menulis",
    "Olahraga",
  ]);
  const [task, setTask] = useState("");
  const [Edit, setEdit] = useState(false);
  const [todoIdx, setTodoIdx] = useState(0);
  return (
    <div className="container">
      <div className="todo__wrap">
        <h3 className="todo__header">Todo List</h3>
        <div className="todo__create">
          <input
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            type="text"
            name="todo list"
            className="todo__create__input"
          />
          {Edit > 0 ? (
            <button
              className="todo__update-create__button"
              onClick={() => {
                setTodo((prev) => {
                  let newData = [...prev];
                  newData.splice(todoIdx, 1, task);
                  return newData;
                });
                setEdit("");
                setTask("");
              }}
            >
              {console.log("todoIdx", todoIdx)}
              Update
            </button>
          ) : (
            <button
              className="todo__update-create__button"
              disabled={!task}
              onClick={() => {
                setTodo((prev) => [...prev, ...[task]]);
                setTask("");
              }}
            >
              Create
            </button>
          )}
        </div>

        <div className="todo__list">
          {todo.map((v, i) => {
            return (
              <div className="todo__list__card" key={v}>
                <div className="todo__list__content">
                  <input
                    className="todo__list__content__check"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div className="todo__list__content__title">{v}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEdit(true);
                      setTask(v);
                      setTodoIdx(i);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setTodo((prev) => {
                        let newData = [...prev];
                        newData.splice(i, 1);
                        return newData;
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
