import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

const reviews = [
  {
    name: "Keena Lara",
    role: "Store Owner",
    text: "Proin iaculis purus consequat sem cure digni aliquam eget nibh et. Maecen aliquam.",
    img: "/portrait-d-une-jeune-femme-d-affaires-tenant-des-lunettes-a-la-main-sur-fond-gris.jpg",
    rating: 5,
  },
  {
    name: "Fizzi Brandon",
    role: "Freelancer",
    text: "Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    img: "cmt.jpg",
    rating: 5,
  },
  {
    name: "Jhone Doe",
    role: "CFO",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
    img: "www.jpg",
    rating: 5,
  },
  {
    name: "Keena Lara",
    role: "Store Owner",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
    img: "/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "Fizzi Brandon",
    role: "Freelancer",
    text: "Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    img: "/testi_3_3.jpg",
    rating: 5,
  },
  {
    name: "Jhone Doe",
    role: "CFO",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
    img: "/testi_3_2.jpg",
    rating: 5,
  },
];

export default function ReviewCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // ✅ pas de flèches
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials-section">
      <h2 className="carousel-title">Testimonials</h2>
      <p className="carousel-subtitle">
        What our clients say about us
      </p>
      <div className="carousel-container2">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <img src={review.img} alt={review.name} className="avatar" />
                <div className="review-info">
                  <h3 className="name">{review.name}</h3>
                  <p className="role">{review.role}</p>
                  <div className="stars">{"★".repeat(review.rating)}</div>
                </div>
              </div>
              <p className="text">❝ {review.text} ❞</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
