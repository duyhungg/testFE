import React from "react";
import "./content.css";
import url from "../../logo.jpg";
import url1 from "../../icon1.jpg";
import url2 from "../../icon2.jpg";
import url3 from "../../icon3.jpg";
const content = () => {
  return (
    <div className="content">
      <div className="logoimg">
        <img src={url} alt="thay the" />
      </div>
      <div className="group2">
        <div className="name">Lorem ipsum dolor sit asmet?</div>
        <div className="info">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </div>
      </div>
      <div className="group">
        <div className="box">
          <h1 className="textmain">Lorem ipsum dolor sit amet</h1>
          <div className="inner">
            <img src={url1} alt="1" />
            <span className="texttitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at{" "}
            </span>
          </div>
          <span className="texttitle2">
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </span>
        </div>
        <div className="box">
          <h1 className="textmain">Lorem ipsum dolor sit amet</h1>
          <div className="inner">
            <img src={url2} alt="1" />
            <span className="texttitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at{" "}
            </span>
          </div>
          <span className="texttitle2">
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </span>
        </div>
        <div className="box">
          <h1 className="textmain">Lorem ipsum dolor sit amet</h1>
          <div className="inner">
            <img src={url3} alt="1" />
            <span className="texttitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at{" "}
            </span>
          </div>
          <span className="texttitle2">
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </span>
        </div>
      </div>
    </div>
  );
};

export default content;
