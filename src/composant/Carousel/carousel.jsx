import { useRef, useEffect } from 'react'

import './carousel.css';

const reviews = [
  {
    name: "Abraham Khalil",
    company: "CEO at Anatara",
    review: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    avatar: "/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "Md Sumon Mia",
    company: "CEO at Rimasu",
    review: "Globally synergize resource sucking value via cutting-edge.",
    avatar: "/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "David Farnandes",
    company: "CEO at Anaton",
    review: "Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
    avatar: "/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "Abraham Khalil",
    company: "CEO at Anatara",
    review: "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
    avatar: "/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "Md Sumon Mia",
    company: "CEO at Rimasu",
    review: "Globally synergize resource sucking value via cutting-edge.",
    avatar: "/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "David Farnandes",
    company: "CEO at Anaton",
    review: "Monotonectally harness an expanded array of models via effective collaboration. Globally synergize resource sucking value via cutting-edge.",
    avatar: "/testi_3_1.jpg",
    rating: 5,
  },
  // Ajoute d'autres reviews si besoin
];

export default function Carousel() {
   const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="reviews-container">
      <div
        className="reviews-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reviews.map((r, index) => (
          <div className="review-card" key={index}>
            <div className="avatar-wrapper">
              <img src={r.avatar} alt={r.name} />
             {/* <div className="badge">66</div>*/}
            </div>
            <div className="stars">{"⭐".repeat(r.rating)}</div>
            <p className="review-text">{r.review}</p>
            <h3>{r.name}</h3>
            <p className="company">{r.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}