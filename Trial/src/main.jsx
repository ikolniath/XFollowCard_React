import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// const CreateButton = ({ text }) => {
//   return (
//     <button>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//       {text}
//     </button>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.Fragment>
//     {/* {createButton({ text: "Button 1" })}  Esta sería una manera incorrecta de pasarle una instrucción, ya que se deben crear componenetes   */}
//     <CreateButton text="Button 1" />
//     <CreateButton text="Button 2" />
//     <CreateButton text="Button 3" />
//   </React.Fragment>
// );
