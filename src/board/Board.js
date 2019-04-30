import React, { useState } from "react";
import Card from "./Card.js";
import "./board.css";

const Board = props => {
  const [boardData, setBoardData] = useState(props.boardData);

  function onMoveBtnClick(request) {
    //remove selcted card
    const updatedData = boardData.map((col, i) => {
      return col.filter((c, i) => {
        return c.id !== request.cardId;
      });
    });
    const newColIndex = request.colIndex + request.move;
    //add card to either left or right col
    updatedData[newColIndex].push({
      id: request.cardId,
      colIndex: newColIndex,
      content: request.content
    });
    setBoardData(updatedData);
  }

  function renderCols() {
    return boardData.map((col, i) => {
      return (
        <div className="column" key={i}>
          {renderCards(col)}
        </div>
      );
    });
  }

  function renderCards(col) {
    return col.map((c, i) => {
      return (
        <Card
          key={i}
          colIndex={c.colIndex}
          totolCols={boardData.length}
          onMoveBtnClick={onMoveBtnClick}
          content={c.content}
          id={c.id}
        />
      );
    });
  }

  const cols = renderCols();
  return <div className="container">{cols}</div>;
};

export default Board;
