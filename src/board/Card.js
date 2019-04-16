import React, { Component } from "react";

export default class Card extends Component {
  constructor() {
    super();
    this.onLeftBtnClick = this.onLeftBtnClick.bind(this);
    this.onRightBtnClick = this.onRightBtnClick.bind(this);
  }
  onLeftBtnClick() {
    const { colIndex, id, cardText } = this.props;
    this.props.onMoveBtnClick({
      colIndex,
      cardId: id,
      move: -1,
      text: cardText
    });
  }
  onRightBtnClick() {
    const { colIndex, id, cardText } = this.props;
    this.props.onMoveBtnClick({
      colIndex,
      cardId: id,
      move: 1,
      text: cardText
    });
  }
  renderContent() {
    const { colIndex, totolCols } = this.props;
    let leftBtn = null;
    let rightBtn = null;
    if (colIndex === 0) {
      rightBtn = this.renderRightBtn();
    } else if (colIndex === totolCols - 1) {
      leftBtn = this.renderLeftBtn();
    } else {
      rightBtn = this.renderRightBtn();
      leftBtn = this.renderLeftBtn();
    }
    return (
      <div className="card-content">
        {leftBtn}
        {this.textContent()}
        {rightBtn}
      </div>
    );
  }
  renderLeftBtn() {
    return <button onClick={this.onLeftBtnClick}>&#8592; Move</button>;
  }
  renderRightBtn() {
    return <button onClick={this.onRightBtnClick}>Move &#8594;</button>;
  }
  textContent() {
    return <p>{this.props.cardText}</p>;
  }
  render() {
    const content = this.renderContent();
    return <div className="card">{content}</div>;
  }
}
