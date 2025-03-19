import React from "react";
import { Carousel,IconButton  } from "@material-tailwind/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Slider() {
  return (
    <>
      <Carousel
        className="rounded-xl"
        transition={{ duration: 1 }}
        autoplay={true}
        autoplayDelay={5000}
        loop= {true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="gray"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
           <KeyboardArrowLeftIcon />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="gray"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <KeyboardArrowRightIcon />

          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {" "}
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-blue-900" : "w-4 bg-blue-500"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}{" "}
          </div>
        )}
      >
        <img
          src="banner.jpg"
          alt="image 1"
          className="h-96 w-full object-cover"
        />
        <img
          src="banner-two.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="banner-three.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </>
  );
}

export default Slider;
