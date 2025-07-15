import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div
        className="slider"
        style={{ "--width": "200px", "--height": "200px", "--quantity": 9 }}
      >
        <div className="list">
          {[...Array(9)].map((_, i) => (
            <div className="item" style={{ "--position": i + 1 }} key={i}>
              <img
                src={techLogos[i].src}
                alt={techLogos[i].alt}
                className="tech-logo"
              />
              <div className="tooltip">{techLogos[i].alt}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const techLogos = [
  { src: "./laravel.png", alt: "Laravel" },
  { src: "/mysql2.png", alt: "MySQL" },
  { src: "/react.png", alt: "React" },
  { src: "./figma.png", alt: "Figma" },
  { src: "./html.png", alt: "HTML5" },
  { src: "./php.png", alt: "PHP" },
  { src: "./mongo-db.png", alt: "MongoDB" },
  { src: "./javascript.png", alt: "JavaScript" },
  { src: "./github.png", alt: "GitHub" },
];

const StyledWrapper = styled.div`
  .tech-logo {
    width: 100px;
    height: 100px;
    object-fit: contain;
    transition: transform 0.4s ease, filter 0.4s ease;
    z-index: 1;
  }

  .tech-logo:hover {
    transform: scale(1.3) rotate(3deg);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
  }

  .tooltip {
    margin-top: 10px;
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 14px;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
  }

  .item:hover .tooltip {
    opacity: 1;
    transform: translateY(0);
  }

  .slider {
    width: 90%;
    max-width: 1000px;
    height: var(--height);
    overflow: hidden;
    margin: 0 auto;
  }

  .slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }

  .slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: autoRun 10s linear infinite;
    animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1) - 10s) !important;
    flex-direction: column;
  }

  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1);
    }
  }

  .slider:hover .item {
    animation-play-state: paused !important;
  }

  .slider[reverse='true'] .item {
    animation: reversePlay 10s linear infinite;
  }

  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1);
    }
    to {
      left: 100%;
    }
  }
`;

export default Card;
