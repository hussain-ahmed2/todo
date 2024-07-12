import React from "react";

function Header({ handleClick, display }) {
  return (
    <>
      <header className="h-14 fixed w-full top-0 border-b-[1px] shadow">
        <nav className="flex items-center h-full justify-between px-5 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Todo.</h1>
          <div className="flex">
            <button
              className={`font-medium  px-5 py-2 border-2 border-transparent hover:border-emerald-600 bg-emerald-500 text-white hover:bg-emerald-300 hover:text-black cursor-pointer hover:shadow rounded-md ${
                display && "hidden"
              }`}
              onClick={handleClick}
            >
              Create
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
