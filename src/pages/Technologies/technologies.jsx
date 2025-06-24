import React from "react";
import './technologies.css';

const InfiniteScroll = () => {
  const cards = [
    <div className="infinite-scroll-card" key="js">
      <div className="card-content"></div>
    </div>,
    <div className="infinite-scroll-card" key="react">
      <div className="card-content2"></div>
    </div>,
    <div className="infinite-scroll-card" key="mysql">
      <div className="card-content3"></div>
    </div>,
  ];

  return (
    <div className="technologies-container">
      <div className="infinite-scroll-container">
        <div className="infinite-scroll-track">
          {cards.concat(cards).map((card, index) =>
            React.cloneElement(card, { key: index })
          )}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
