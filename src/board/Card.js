import React from "react";

const Card = props => {
  const { colIndex, id, content } = props;

  function onMoveBtnClick(move) {
    props.onMoveBtnClick({
      colIndex,
      cardId: id,
      move,
      content
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
        <p>{content}</p>
        {rightBtn}
      </div>
    );
  }

  function renderLeftBtn() {
    return <button onClick={() => onMoveBtnClick(-1)}>&#8592; Move</button>;
  }

  function renderRightBtn() {
    return <button onClick={() => onMoveBtnClick(1)}>Move &#8594;</button>;
  }

  const cardContent = renderContent();
  return <div className="card">{cardContent}</div>;
};

export default Card;
