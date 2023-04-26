import React from "react";
import "./Style/Home.css";
import Siderbar from "../../layout/Sidebar/Sidebar";
import Feed from "../../layout/Feed/Feed";
import Widgets from "../../layout/Widgets/Widgets";
function Home() {
  return (
    <>
      <div className="app">
        <Siderbar />

        <Feed />

        <Widgets />
      </div>
    </>
  );
}

export default Home;
