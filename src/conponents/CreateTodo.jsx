import React, { useState } from "react";

function CreateTodo({ display, setData, setDisplay }) {
  const [todo, setTodo] = useState("");
  const [placeholder, setPlaceholder] = useState("Type here...");

  function handleClick() {
    setPlaceholder("Type here...");
    setDisplay((prev) => !prev);
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo === "") {
      setPlaceholder("Please type something here...");
      return;
    }

    setData((prev) => [...prev, todo]);
    setTodo("");
    setDisplay((prev) => !prev);
  }

  return (
    <>
      <section
        className={`absolute w-full h-full backdrop-blur-sm backdrop-brightness-75 ${
          !display && "hidden"
        }`}
      >
        <div className="w-full flex items-center justify-center px-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 mt-28 max-w-[700px] w-full p-5 border-[1px] border-neutral-500 rounded-lg bg-white"
          >
            <p onClick={handleClick} className="self-end cursor-pointer">
              &#10006;
            </p>
            <label htmlFor="todo">What's on your mind ?</label>
            <textarea
              value={todo}
              onChange={handleChange}
              name="todo"
              id="todo"
              cols="30"
              rows="8"
              placeholder={placeholder}
              className={`border-[1px] outline-none focus:border-emerald-400 rounded-md p-3 hover:border-yellow-300 ${
                placeholder != "Type here..." && "placeholder:text-rose-300 border-rose-300"
              }`}
            />
            <input
              className="px-5 py-2 border-2 border-transparent hover:border-emerald-600 bg-emerald-500 text-white rounded font-medium hover:bg-emerald-300 hover:text-black cursor-pointer hover:shadow-md"
              type="submit"
              value="Create"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateTodo;
