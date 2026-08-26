import { useState } from "react";
import "./TodoList.css";

function TodoList() {
// Todo states
const [todos, setTodos] = useState([]);
const [headingInput, setHeadingInput] = useState("");
const [listInputs, setListInputs] = useState({});

// Add Heading
const handleAddTodo = () => {
if (headingInput.trim() !== "") {
setTodos([
...todos,
{
heading: headingInput,
lists: [],
},
]);

setHeadingInput("");
}
};

// Add List
const handleAddList = (index) => {
if (
listInputs[index] &&
listInputs[index].trim() !== ""
) {
const newTodos = [...todos];

newTodos[index].lists.push(listInputs[index]);

setTodos(newTodos);

setListInputs({
...listInputs,
[index]: "",
});
}
};

// Handle List Input
const handleListInputChange = (index, value) => {
setListInputs({
...listInputs,
[index]: value,
});
};

// Delete Heading and Todo List
const handleDeleteTodo = (index) => {
const newTodos = [...todos];

newTodos.splice(index, 1);

setTodos(newTodos);
};

return (
<div className="todo-container">

{/* Title */}
<h1>My Todo List</h1>

{/* Add Heading */}
<div className="input-container">
<input
type="text"
className="heading-input"
placeholder="Enter todo heading"
value={headingInput}
onChange={(e) =>
setHeadingInput(e.target.value)
}
/>

<button onClick={handleAddTodo}>
Add Heading
</button>
</div>

{/* Todo Main */}
<div className="todo_main">

{todos.map((todo, index) => (
<div
key={index}
className="todo-card"
>

{/* Heading */}
<div className="heading_todo">

<h3>{todo.heading}</h3>

<button
className="delete-button-heading"
onClick={() =>
handleDeleteTodo(index)
}
>
Delete Heading
</button>

</div>

{/* Todo Lists */}
<ul>
{todo.lists.map(
(list, listIndex) => (
<li key={listIndex}>
<p>{list}</p>
</li>
)
)}
</ul>

{/* Add List */}
<div className="add_list">

<input
type="text"
placeholder="Enter todo item"
value={
listInputs[index] || ""
}
onChange={(e) =>
handleListInputChange(
index,
e.target.value
)
}
/>

<button
onClick={() =>
handleAddList(index)
}
>
Add List
</button>

</div>

</div>
))}

</div>
</div>
);
}

export default TodoList;