import { useEffect, useState } from "react";

const Carousel = (): JSX.Element => {
  const slides = [
    { id: 1, src: "/carousel5.jpg", alt: "slide1" },
    { id: 2, src: "/carousel3.jpg", alt: "slide2" },
    { id: 3, src: "/carousel2.jpg", alt: "slide3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  // 자동 슬라이드 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <>
      <div className="carousel w-full aspect-[16/5] hidden md:block mt-36">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`carousel-item relative w-full h-full ${
              currentSlide === slide.id ? "block" : "hidden"
            }`}
          >
            <img
              src={slide.src}
              className="w-full h-full object-cover"
              alt={slide.alt}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() =>
                  handleSlideChange(
                    slide.id === 1 ? slides.length : slide.id - 1
                  )
                }
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() =>
                  handleSlideChange(
                    slide.id === slides.length ? 1 : slide.id + 1
                  )
                }
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
