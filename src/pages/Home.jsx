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
        </div>
      </div>

      {/* Body */}

      <div className="w-[80%] h-full flex flex-col justify-between items-end">
        {/* personal Details  */}
        <div className="w-full flex justify-end items-center px-20 h-[18vh]">
          <div className="flex gap-4 items-center py-4 px-2 cursor-pointer hover:bg-white/10">
            <div className="flex flex-col items-end">
              <p className="text-sm font-semibold text-primary">
                Zekarias Berhe
              </p>
              <p className="text-[12px] opacity-80 text-primary font-light">
                ZackBerhe20@gmail.com
              </p>
            </div>
            <img
              src={PlanetImage}
              alt="User Profile"
              className="h-10 w-10 object-cover rounded-full bg-white"
            />
          </div>
        </div>

        {/* chat Area  */}

        <div className="w-full h-full flex justify-center">
          {/* Chat Container */}
          <div className="w-9/12 h-full flex-col bg-white shadow-2xl">
            {/* Chat Person Profile */}
            <div className="w-full flex items-center h-15% bg-primary">
              <div className="flex gap-4 items-center py-4 px-2">
                <img
                  src={PlanetImage}
                  alt="User Profile"
                  className="h-8 w-8 object-cover rounded-full border-2 border-white p-0.5"
                />{" "}
                <p className="text-xs text-white">Zekarias Berhe</p>
              </div>
            </div>

            {/* real conversation container */}

            <div className="w-full flex flex-col h-[85%] gap-2 pt-2 overflow-auto relative">
              {/* users Sent texts  */}
              <div className="w-full flex justify-start px-4">
                <div className="w-2/5 rounded-t-lg rounded-r-lg bg-primary h-max py-2 px-4">
                  <p className="text-sm font-medium text-white">Hello Guys</p>
                </div>
              </div>

              {/* my sent Texts  */}
              <div className="w-full flex items-end justify-end px-4">
                <div className="w-2/5 rounded-t-lg rounded-l-lg bg-primary h-max py-1 px-4">
                  <p className="text-sm font-medium text-white">
                    Hello Guys Hello GuysHello GuysHello GuysHello Guys Hello
                    GuysHello GuysHello Guys
                  </p>
                </div>
              </div>

              {/* textarea */}

              <textarea className="absolute bottom-0 w-full resize-none border-primary border-2 p-4"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
