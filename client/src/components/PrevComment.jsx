import React from "react";
import chnlImage from "../images/girl-4448689_1280.jpg";

const PrevComment = () => {
  return (
    <div className="w-full flex items-center gap-4">
      <img
        src={chnlImage}
        alt=""
        className="w-[43px] h-[40px] rounded-full mt-[30px]"
      />

      {/* content section */}
      <div className=" mt-10">
        <div className="flex items-center gap-2">
          <p className="text-[14px]">@username</p>
          <p className="text-xs">1 yr ago</p>
        </div>
        <div>
          <p className="text-[15px] mt-1">
            1 year ago this looks so good! the only suggestion is to
            add slider/swiper function in each row would be perfect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrevComment;
