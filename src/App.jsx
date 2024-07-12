import { useEffect, useState } from "react";
import Content from "./conponents/Content";
import Footer from "./conponents/Footer";
import Header from "./conponents/Header";
import CreateTodo from "./conponents/CreateTodo";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("myTodoAppData")) || []
  );
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    localStorage.setItem("myTodoAppData", JSON.stringify(data));
  }, [data]);

  function handleCreateClick() {
    setDisplay((prev) => !prev);
  }

  return (
    <>
      <CreateTodo display={display} setData={setData} setDisplay={setDisplay} />

      <Header display={display} handleClick={handleCreateClick} />

      <Content data={data} setData={setData} />

      <Footer />
    </>
  );
}

export default App;
