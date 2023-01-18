import React from "react";
import UserDetail from "../components/UserDetail";
import PlanetImage from "../assets/Planet9_3840x2160.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Sidebar  */}
      <div className="w-[20rem] flex flex-col items-start gap-4 py-10 px-6 bg-primary h-full overflow-auto scrollBar">
        <p className="font-semibold text-xl text-white">Chats</p>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search User"
          className="w-full p-2 border-none focus:outline-none focus:bg-white bg-white/40 placeholder:text-primary text-sm"
        />

        <div className=" flex flex-col gap-6 py-10 w-full">
          <UserDetail
            UserImage={PlanetImage}
            UserName={"Kassahun Lemma"}
            LastChat={"See You Soon"}
          />
          <UserDetail
            UserImage={PlanetImage}
            UserName={"Kassahun Lemma"}
            LastChat={"See You Soon"}
          />
          <UserDetail
            UserImage={PlanetImage}
            UserName={"Kassahun Lemma"}
            LastChat={"See You Soon"}
          />
          <UserDetail
            UserImage={PlanetImage}
            UserName={"Kassahun Lemma"}
            LastChat={"See You Soon"}
          />
          <UserDetail
            UserImage={PlanetImage}
            UserName={"Kassahun Lemma"}
            LastChat={"See You Soon"}
          />
          <UserDetail
            UserImage={PlanetImage}
            UserName={"Kassahun Lemma"}
            LastChat={"See You Soon"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
