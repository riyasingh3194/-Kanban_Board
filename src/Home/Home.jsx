import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../Containers/navbar/Navigation";
import Board from "../Containers/board/Board";

import style from "../Home/Home.module.css";
import sf2 from "../utils/sf2.jpg";

const Home = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [Theme, setTheme] = React.useState(0);
  const backgroundImages = [sf2];
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const changeTheme = () => {
    if (backgroundImages.length - 1 > Theme) {
      setTheme(Theme + 1);
    } else {
      setTheme(0);
    }
  };
  return (
    <div className={style.HomeContainer}>
      <div className={style.Navbar}>
        <Navbar />
      </div>
      <div className={style.container}>
        <div
          // className={` ${style.sideBarContainer} ${
          //   collapsed ? style.collapsed : null
          // }`}
        >
          {/* {collapsed ? (
          //   <button id={style.expandBtn} onClick={handleCollapse}>
          //     <NavigateNextIcon sx={{ fontSize: "1.5rem" }} />
          //   </button>
          // ) : (
            // <Sidebar
            //   collapsed={collapsed}
            //   setCollapsed={setCollapsed}
            //   handleCollapse={handleCollapse}
            //   changeTheme={changeTheme}
            // />
            null
          )} */}
        </div>

        <div
          className={` ${style.boardContainer} ${
            collapsed ? style.collapsed : null
          }`}
          style={{ backgroundImage: `url(${backgroundImages[Theme]})`,width:"100% "}}
        >
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;