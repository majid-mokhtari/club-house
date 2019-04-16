import React, { Component } from "react";
import Card from "./Card.js";
import "./board.css";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: props.boardData
    };
    this.onMoveBtnClick = this.onMoveBtnClick.bind(this);
  }

  onMoveBtnClick(request) {
    const { boardData } = this.state;
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
      text: request.text
    });
    this.setState({
      boardData: updatedData
    });
  }

  renderCols() {
    const { boardData } = this.state;
    return boardData.map((col, i) => {
      return (
        <div className="column" key={i}>
          {this.renderCards(col)}
        </div>
      );
    });
  }
  renderCards(col) {
    const { boardData } = this.state;
    return col.map((c, i) => {
      return (
        <Card
          key={i}
          colIndex={c.colIndex}
          totolCols={boardData.length}
          onMoveBtnClick={this.onMoveBtnClick}
          cardText={c.text}
          id={c.id}
        />
      );
    });
  }
  render() {
    const cols = this.renderCols();
    return <div className="container">{cols}</div>;
  }
}
