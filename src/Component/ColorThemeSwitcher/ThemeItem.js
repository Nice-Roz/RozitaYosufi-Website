import React from "react";

const ThemeItem=({color,img,changeColor,changeBackground,background,changeShadow,boxshadow })=>{
    return(
        <img src={img} alt="" className="theme__img" onClick={()=>{
            changeColor(color);
            changeBackground(background);
            changeShadow(boxshadow)
        }}/>
    )
}
export default ThemeItem;