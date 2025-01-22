import React from "react";
import { Button, Chip, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import Reviews from "./reviews";
import SellIcon from "@mui/icons-material/Sell";
import { Carousel, IconButton } from "@material-tailwind/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Suggestions from "../components/suggestions";
import Swal from "sweetalert2";

function ProductDetail({
  productdetail,
  rating,
  reviews,
  tags,
  images,
  loading,
}) {
  const calculateDiscountedPrice = (productdetail) => {
    return (
      productdetail.price -
      (productdetail.price * productdetail.discountPercentage) / 100
    ).toFixed(2);
  };

  const onlyLeft = () => {
    if (productdetail.stock <= 10 && productdetail.stock >= 1) {
      return (
        <Chip
          label={`Hurry up only ${productdetail.stock} Left`}
          color="warning"
          className="font-semibold animate__animated animate__shakeX animate__delay-2s "
          variant="outlined"
        />
      );
    } else if (productdetail.stock == 0) {
      return (
        <Chip label={`out of stock!!!`} color="error" variant="outlined" />
      );
    } else {
      return (
        <Chip
          label={`${productdetail.stock} Left`}
          color="primary"
          variant="outlined"
        />
      );
    }
  };

  const addTocart = (productdetail) => {
    const user = JSON.parse(localStorage.getItem("save user"));
    if (user) {
      return localStorage.setItem(
        `cart product`,
        JSON.stringify(productdetail)
      );
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "you don't have account!",
        footer: '<a href="/login">Why do I have this issue?</a>',
      });
    }
  };

  const hanldeBuyproduct = () => {
    const user = JSON.parse(localStorage.getItem("save user"));
    if (user) {
      Swal.fire({
        title: "order diliver in 2-3days",
        text: `in this address: ${user.address.address},${user.address.city}, ${user.address.state}, ${user.address.country}`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "confirm",
        denyButtonText: `Don't confirm`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Order is Confirmed!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Order is denied!", "", "info");
        }
      });
      // console.log('buy productdetail');
    } else if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "you don't have account!",
        footer: '<a href="/login">Why do I have this issue?</a>',
      });
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  // let tags =  productdetail.tags
  // console.log('tags',tags);
  // console.log('imagies', productdetail.images);

  const save = productdetail.price - calculateDiscountedPrice(productdetail);

  return (
    <>
      {loading ? (
        loading
      ) : (
        <div
          key={productdetail.id}
          className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-1">
            {/* =========Left Section=========== */}

            <div className=" lg:mx-10 flex flex-col items-center justify-center">
              {/* <img src= alt= className='py-10' /> */}

              {/* =========Silder=========== */}

              <Carousel
                className="rounded-xl"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    xmlns="http://www.w3.org/2000/svg"
                    variant="text"
                    color="gray"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <KeyboardArrowLeftIcon />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <KeyboardArrowRightIcon />
                    </svg>
                  </IconButton>
                )}
              >
                <img
                  src={productdetail.thumbnail}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />

                {images.map((image, index) => {
                  return (
                    <img
                      src={image}
                      key={index}
                      alt="product-image"
                      className="h-full w-full object-cover"
                    />
                  );
                })}
              </Carousel>

              {/* =========Silder End=========== */}

              <div className="flex gap-2">
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<ShoppingCartIcon />}
                  onClick={() => hanldeBuyproduct()}
                >
                  Buy Now
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  endIcon={<AddIcon />}
                  onClick={() => addTocart(productdetail)}
                >
                  Add To Cart
                </Button>
              </div>
            </div>

            {/* =========Right Section=========== */}

            <div
              className=" rounded-xl  h-3/4 hover:shadow-inner p-3  hover:overflow-scroll hover:overflow-x-auto transition-all duration-1000 overflow-hidden
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300"
            >
              <div className="font-bold font-sans text-2xl">
                {productdetail.title}
              </div>

              <div className="flex items-center gap-1 font-semibold my-3 ">
                <Rating value={rating} precision={0.5} readOnly />
                {rating}
              </div>

              <div className="my-3">
                <span className="sm:text-3xl text-xl flex gap-2 font-semibold">
                  ${calculateDiscountedPrice(productdetail)}
                  <span className="text-gray-600 line-through opacity-85">
                    {productdetail.price}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {productdetail.discountPercentage}% off
                  </span>
                </span>
                <span className="sm:text-xl text-base text-green-600">
                  Save ${save.toFixed(2)}
                </span>
              </div>

              <div>
                <span>Category: {productdetail.category} </span>
              </div>

              <div>
                <p className="my-5">
                  <span className="my-3 font-semibold text-xl">About:</span>{" "}
                  <br /> <span> {productdetail.description}</span>{" "}
                </p>
              </div>

              <div className="my-5">{onlyLeft()}</div>

              <div className="my-5">
                warranty-Info: {productdetail.warrantyInformation}
              </div>

              <div>
                <b>Tags:</b>
                {tags.map((item, index) => {
                  return (
                    <Chip
                      key={index}
                      className="mx-2"
                      label={item}
                      size="small"
                      icon={<SellIcon />}
                    />
                  );
                })}
              </div>

              <div className="my-5">
                Brand: {productdetail.brand || "not define"}
              </div>

              <div className="my-5">
                Availability: {productdetail.availabilityStatus}
              </div>

              <div className="my-5">
                ReturnPolicy: {productdetail.returnPolicy}
              </div>

              <div className="my-5">
                minimumOrderQuantity: {productdetail.minimumOrderQuantity}
              </div>
            </div>
          </div>

          <div className="border my-2 p-4">
            <h2 className="text-4xl font-semibold">Ratings & Reviews</h2>
            <Reviews productreviews={reviews} />
          </div>

          <div className="bg-gray-200 rounded py-2 px-3">
            <h2 className="text-2xl font-bold my-2">Similar Products</h2>
            <div
              className="flex  overflow-scroll overflow-y-auto transition-all duration-1000 
        [&::-webkit-scrollbar]:h-2
        [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-green-200"
            >
              <div className="flex mx-auto gap-2 mb-1">
                <Suggestions />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
