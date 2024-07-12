import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className="font-thin h-14 grid place-content-center capitalize bg-neutral-700 text-white text-sm">
        <p>copyright &copy; {year} all right reserved</p>
      </footer>
    </>
  );
}

export default Footer;
