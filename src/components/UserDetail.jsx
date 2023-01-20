import React from "react";

const UserDetail = ({ UserImage, UserName, LastChat, handleClick }) => {
  return (
    <>
      <div
        onClick={handleClick}
        className="w-full flex gap-6 items-center py-4 px-2 cursor-pointer hover:bg-white/10"
      >
        <img
          src={UserImage}
          alt="User Profile"
          className="h-10 w-10 object-cover rounded-full bg-white"
        />

        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold text-white">{UserName}</p>
          <p className="text-[12px] opacity-80 text-white font-light">
            {LastChat}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
