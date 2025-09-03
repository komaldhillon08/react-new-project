import { useState } from "react";
import Button from "../components/Button";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo() {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleRemoveTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-indigo-950 mb-8 text-center">
        T O D O
      </h2>

      <div className="text-center w-1/4 m-auto">
        <input
          className="border px-4 py-2 mr-4 rounded"
          type="text"
          placeholder="Enter Text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={handleAddTodo}>Add</Button>

        <ul className=" mt-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center px-3 py-2 border"
            >
              {todo.text}
              <span
                className="cursor-pointer text-red-500 font-bold"
                onClick={() => handleRemoveTodo(todo.id)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* import { useState } from "react";
import Button from "../components/Button";

export default function Todo() {
    const [todos , setTodos] =useState([])
    const [inputvalue , setInputvalue] =useState("")

    function handleAddTodo() {
        if (inputvalue.trim() === "") return

        const newTodo = {
            id : Date.now(),
            text : inputvalue
        }
        console.log("komal");
        
        
        setTodos([...todos , newTodo])
        setInputvalue("")
    }


    return (
        <>
            <section>
                <h2 className="text-3xl font-bold text-indigo-950 mb-8 text-center">
                    T O D O
               </h2>
                <div className="text-center w-1/4 m-auto ">
                    <input  className="border-1 px-4 py-2 mr-8 rounded" 
                        type="text"
                        placeholder="Enter Text"
                          value={inputvalue} 
                         onChange={(e) => setInputvalue(e.target.value)}
                    />
                    <Button onClick={handleAddTodo}>Add</Button>

                    <ul className="border-1 flex justify-between px-3 mt-3 ">
                        {todos.map((items) => (
                            <li lassName=" items-center px-3 py-2 border-b ">{items.text}

                        <p className="cursor-pointer text-red-500 font-bold">X</p>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
} */