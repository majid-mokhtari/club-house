import React from "react";
import Board from "./board/Board.js";
import "./App.css";

//mock json
const boardData = [
  [
    {
      id: 1,
      colIndex: 0,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 2,
      colIndex: 0,
      content:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ],
  [
    {
      id: 3,
      colIndex: 1,
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    }
  ],
  [
    {
      id: 4,
      colIndex: 2,
      content: "laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 5,
      colIndex: 2,
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse"
    },
    {
      id: 6,
      colIndex: 2,
      content: "gggDeawfure dolor in reprehenderit in voluptate velit esse"
    }
  ],
  [
    {
      id: 7,
      colIndex: 3,
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    }
  ]
];

const App = props => {
  return (
    <div className="App">
      <Board boardData={boardData} />
    </div>
  );
};

export default App;
