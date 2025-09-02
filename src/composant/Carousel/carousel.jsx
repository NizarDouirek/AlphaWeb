// ReviewCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

const reviews = [
 {
    name: "Keena Lara",
    role: "Store Owner",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    img: "/portrait-d-une-jeune-femme-d-affaires-tenant-des-lunettes-a-la-main-sur-fond-gris.jpg",
    rating: 5,
  },
  {
    name: "Fizzi Brandon",
    role: "Freelancer",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    img: "/Generated Image September 02, 2025 - 9_58PM.jpeg",
    rating: 5,
  },
  {
    name: "Jhone Doe",
    role: "CFO",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    img: "/Generated Image September 02, 2025 - 10_00PM.jpeg",
    rating: 5,
  }, 
  {
    name: "Keena Lara",
    role: "Store Owner",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    img: "/testi_3_1.jpg",
    rating: 5,
  },
  {
    name: "Fizzi Brandon",
    role: "Freelancer",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
    img: "/testi_3_3.jpg",
    rating: 5,
  },
  {
    name: "Jhone Doe",
    role: "CFO",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
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
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};


  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <img src={review.img} alt={review.name} className="avatar" />
              <div className="review-info">
                <h3 className="name">{review.name}</h3>
                <p className="role">{review.role}</p>
                <div className="stars">
                  {"★".repeat(review.rating)}
                </div>
              </div>
            </div>
            <p className="text">❝ {review.text} ❞</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
