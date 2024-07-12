import React from "react";

function Content({ data, setData }) {
  function handleClick(index) {
    setData((prev) => prev.filter((el, i) => i != index));
  }

  return (
    <>
      <main className="h-[calc(100vh-56px)] bg-neutral-100 pt-14">
        <section className="flex items-center justify-center pt-10 px-5">
          <div className="border-[1px] border-emerald-700 p-2 max-w-[768px] w-full bg-white flex flex-col-reverse gap-2 rounded-md">
            {data.length ? (
              data.map((el, index) => {
                return (
                  <p
                    className="p-4 border-[1px] border-neutral-400 rounded flex items-center justify-between hover:bg-neutral-200"
                    key={index}
                  >
                    {el}
                    <span
                      className="cursor-pointer"
                      onClick={() => handleClick(index)}
                    >
                      &#10004;
                    </span>
                  </p>
                );
              })
            ) : (
              <p className="p-4 text-center">You're all cought up!</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Content;
