import React from "react";

function Footer() {
  return (
    <div className="m-10 text-sm text-center text-gray-500">
      <p>
        Employee pictures provided by{" "}
        <a
          href="https://randomuser.me/"
          className="font-bold text-gray-600 hover:text-yellow-500"
        >
          Google
        </a>
      </p>
      <p>
        Built by{" "}
        <a className="font-bold text-gray-600 hover:text-yellow-500">
          Aashu gupta
        </a>
      </p>
    </div>
  );
}

export default Footer;
