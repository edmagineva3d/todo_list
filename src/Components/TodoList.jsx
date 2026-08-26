import { useState } from "react";

function TodoList() {
const [todos, setTodos] = useState([]);
const [headingInput, setHeadingInput] = useState("");
const [listInputs, setListInputs] = useState({});

return (
<div className="todo-container">
<h1>My Todo List</h1>

<div className="input-container">
<input
type="text"
className="heading-input"
placeholder="Enter todo heading"
value={headingInput}
onChange={(e) => setHeadingInput(e.target.value)}
/>

<button>Add Heading</button>
</div>

<div className="todo_main"></div>
</div>
);
}

export default TodoList;