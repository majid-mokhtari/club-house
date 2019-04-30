import React from "react";

const Card = props => {
  function onLeftBtnClick() {
    const { colIndex, id, cardText } = props;
    props.onMoveBtnClick({
      colIndex,
      cardId: id,
      move: -1,
      text: cardText
    });
  }

  function onRightBtnClick() {
    const { colIndex, id, cardText } = props;
    props.onMoveBtnClick({
      colIndex,
      cardId: id,
      move: 1,
      text: cardText
    });
  }

  function renderContent() {
    const { colIndex, totolCols } = props;
    let leftBtn = null;
    let rightBtn = null;
    if (colIndex === 0) {
      rightBtn = renderRightBtn();
    } else if (colIndex === totolCols - 1) {
      leftBtn = renderLeftBtn();
    } else {
      rightBtn = renderRightBtn();
      leftBtn = renderLeftBtn();
    }
    return (
      <div className="card-content">
        {leftBtn}
        {textContent()}
        {rightBtn}
      </div>
    );
  }

  function renderLeftBtn() {
    return <button onClick={onLeftBtnClick}>&#8592; Move</button>;
  }

  function renderRightBtn() {
    return <button onClick={onRightBtnClick}>Move &#8594;</button>;
  }

  function textContent() {
    return <p>{props.cardText}</p>;
  }

  const content = renderContent();
  return <div className="card">{content}</div>;
};

export default Card;
