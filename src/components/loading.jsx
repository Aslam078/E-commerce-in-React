import React from "react";
import { Skeleton } from "@mui/material";

function Loading() {
  return (
    <>
      <div className="grid p-1 rounded-md grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-2">
        <div className="">
          <Skeleton variant="rounded" height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
          <span className="flex justify-between items-center">
            <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
            <Skeleton
              variant="text"
              width={50}
              height={50}
              sx={{ fontSize: "1rem" }}
            />
          </span>
        </div>

        <div className="">
          <Skeleton variant="rounded" height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
          <span className="flex justify-between items-center">
            <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
            <Skeleton
              variant="text"
              width={50}
              height={50}
              sx={{ fontSize: "1rem" }}
            />
          </span>
        </div>

        <div className="">
          <Skeleton variant="rounded" height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
          <span className="flex justify-between items-center">
            <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
            <Skeleton
              variant="text"
              width={50}
              height={50}
              sx={{ fontSize: "1rem" }}
            />
          </span>
        </div>

        <div className="">
          <Skeleton variant="rounded" height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
          <span className="flex justify-between items-center">
            <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
            <Skeleton
              variant="text"
              width={50}
              height={50}
              sx={{ fontSize: "1rem" }}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Loading;
