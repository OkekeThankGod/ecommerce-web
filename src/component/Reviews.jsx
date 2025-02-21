import { CiStar } from "react-icons/ci";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import img1 from '../assets/images/Assets/cart1.jpg'
import img2 from '../assets/images/Assets/cart2.jpg'
import img3 from '../assets/images/Assets/cart3.jpg'
import img4 from '../assets/images/Assets/cart4.jpg'
import img5 from '../assets/images/Assets/p1_product_i1.png'
import img6 from'../assets/images/Assets/product_23.png'

// Reviews Data
const reviews = [
  {
    name: "Okeke Chisom",
    role: "Model",
    imgSrc: img1,
    rating: 5,
    review:
      "The service was absolutely fantastic! I loved every moment of my experience. Highly recommended!",
  },
  {
    name: "Victorian Jones",
    role: "Designer",
    imgSrc: img2,
    rating: 4,
    review:
      "Great experience! The team was super professional, and I am really happy with the outcome.",
  },
  {
    name: "Sam Smith",
    role: "Developer",
    imgSrc: img3,
    rating: 5,
    review:
      "This is by far the best service I've ever used. The quality exceeded my expectations!",
  },
  {
    name: "Emily Johnson",
    role: "Cinematographer",
    imgSrc: img4,
    rating: 5,
    review:
      "Absolutely amazing! The attention to detail and the customer service were top-notch.",
  },
  {
    name: "Michael Boston",
    role: "Entrepreneur",
    imgSrc: img5,
    rating: 4,
    review:
      "Solid experience overall! A few minor issues, but nothing that would stop me from coming back.",
  },
  {
    name: "Millicent Sophia",
    role: "Artist",
    imgSrc: img6,
    rating: 5,
    review:
      "Exceptional service! The team went above and beyond to ensure everything was perfect.",
  },
];

export default function Reviews() {
  return (
    <div className="bg-[#f0eded] py-12 px-6 relative">
      {/* Header with Title and Navigation Icons */}
      <div className="flex items-center justify-between align-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-sans text-slate-800">
          What Our Customers Say
        </h1>
        {/* Navigation Icons Container */}
        <div className="flex gap-2">
          {/* Inverted: "Next" button on the left with black background and white arrow */}
          <div className="swiper-button-next bg-black p-8 rounded-2xl shadow-md hover:bg-gray-800 cursor-pointer flex items-center justify-center  lg:mx-10 ">
            <TbArrowBigRight className="text-sm text-white" />
          </div>
          {/* "Prev" button on the right with white background and black arrow */}
          <div className="swiper-button-prev bg-white p-8 rounded-2xl shadow-md hover:bg-gray-100 cursor-pointer flex items-center justify-center lg:mx-10">
            <TbArrowBigLeft className="text-sm text-black" />
          </div>
        </div>
      </div>
      {/* Swiper Slider */}
      <div className="mt-8 relative w-full max-w-5xl mx-auto">
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1.3, spaceBetween: 5 },
            640: { slidesPerView: 1.5, spaceBetween: 5 },
            768: { slidesPerView: 3, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          navigation={{
            // Note: Swiper uses these selectors to attach functionality.
            // Even though the buttons are inverted in the header,
            // their classes remain to ensure correct navigation.
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="relative"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-5 bg-white shadow-md rounded-lg h-60 w-80 flex flex-col justify-between border border-gray-200">
                {/* Star Ratings */}
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <CiStar key={i} className="text-lg" />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  `{review.review}`
                </p>
                {/* User Info */}
                <div className="flex items-center mt-2">
                  <img
                    src={review.imgSrc}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                  <div className="ml-3">
                    <h1 className="font-semibold text-sm text-gray-900">
                      {review.name}
                    </h1>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
