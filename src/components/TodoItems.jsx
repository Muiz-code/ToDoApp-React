import "./CSS/TodItems.css";
import Cirle from "../assets/Circle.svg";
import Cancel from "../assets/Cancel.svg";
import Check from "../assets/Check.svg";

const TodoItems = ({ no, display, text, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="todoItems">
      <div
        className={`todoItemsContainer ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={Cirle} alt="" />
        ) : (
          <img src={Check} alt="" />
        )}

        <div className="todoItemsText">{text}</div>
      </div>
      <img
        src={Cancel}
        className="todoCancel"
        onClick={() => {
          deleteTodo(no);
        }}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
