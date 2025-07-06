import { useRef, useEffect } from 'react';
import './carousel.css';

const reviews = [
  {
    name: "Abraham Khalil",
    position: "CEO",
    company: "Anatara",
    companyLogo: "/js.png",
    review: "Grâce à leur expertise, nous avons transformé notre vision en réalité. Une équipe exceptionnelle et un service irréprochable.",
    avatar: "/portrait-d-une-jeune-femme-d-affaires-tenant-des-lunettes-a-la-main-sur-fond-gris.jpg",
    rating: 5,
  },
  {
    name: "Md Sumon Mia",
    position: "CEO",
    company: "Rimasu",
    companyLogo: "/js.png",
    review: "Une collaboration fluide et des résultats à la hauteur de nos attentes.",
    avatar: "/beau-jeune-homme-aux-bras-croises-sur-fond-blanc.jpg",
    rating: 5,
  },
  {
    name: "David Fernandes",
    position: "CEO",
    company: "Anaton",
    companyLogo: "/js.png",
    review: "Une équipe passionnée et compétente, avec un vrai sens du détail.",
    avatar: "/Capture d'écran 2025-05-08 142629.png",
    rating: 5,
  },
  {
    name: "Abraham Khalil",
    position: "CEO",
    company: "Anatara",
    companyLogo: "/js.png",
    review: "Grâce à leur expertise, nous avons transformé notre vision en réalité. Une équipe exceptionnelle et un service irréprochable.",
    avatar: "/homme-souriant-les-bras-croises.jpg",
    rating: 5,
  },
  {
    name: "Md Sumon Mia",
    position: "CEO",
    company: "Rimasu",
    companyLogo: "/js.png",
    review: "Une collaboration fluide et des résultats à la hauteur de nos attentes.",
    avatar: "/dv_lottery.jpg",
    rating: 5,
  },
  {
    name: "David Fernandes",
    position: "CEO",
    company: "Anaton",
    companyLogo: "/js.png",
    review: "Une équipe passionnée et compétente, avec un vrai sens du détail.",
    avatar: "/souriante-belle-jeune-femme-debout-et-posant.jpg",
    rating: 5,
  },
];

export default function Carousel() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isJumping = useRef(false);

  const CARD_WIDTH = 356; // 340 + 16
  const cloneCount = 3;

  const clonesBefore = reviews.slice(-cloneCount);
  const clonesAfter = reviews.slice(0, cloneCount);
  const allReviews = [...clonesBefore, ...reviews, ...clonesAfter];

  const realContentWidth = CARD_WIDTH * reviews.length;
  const initialScroll = CARD_WIDTH * cloneCount;
  const minLeft = CARD_WIDTH * (cloneCount - 1);
  const maxRight = initialScroll + realContentWidth;



  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = initialScroll;
    }
  }, []);

 const handleScroll = () => {
  if (!scrollRef.current || isJumping.current) return;

  const scrollPos = scrollRef.current.scrollLeft;

  if (scrollPos <= minLeft) {
    isJumping.current = true;
    scrollRef.current.scrollLeft = scrollPos + realContentWidth;
    requestAnimationFrame(() => {
      isJumping.current = false;
    });
  } else if (scrollPos >= maxRight) {
    isJumping.current = true;
    scrollRef.current.scrollLeft = scrollPos - realContentWidth;
    requestAnimationFrame(() => {
      isJumping.current = false;
    });
  }
};


  const handleMouseDown = (e) => {
    stopAutoScroll();
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startAutoScroll();
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      startAutoScroll();
    }
  };

  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      if (!scrollRef.current || isDragging.current) return;

      scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <div className="reviews-container">
      <div
        className="reviews-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        {allReviews.map((r, index) => (
          <div className="review-card" key={index}>
            <div className="review-image">
              <img src={r.avatar} alt={`Photo de ${r.name}`} />
            </div>
            <div className="review-content">
              <div className="company-logo">
                <img src={r.companyLogo} alt={`Logo ${r.company}`} />
              </div>
              <h3>{r.name}</h3>
              <p>{r.position} — {r.company}</p>
              <p>{r.review}</p>
              <div className="stars">
                {'★'.repeat(r.rating)}
                {'☆'.repeat(5 - r.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
