import React, {FC} from "react";
import s from "./Button.module.css"

interface Button {
    text:string;
    style?: React.CSSProperties;
}



const Button:FC<Button> = ({text, style}) => {
    return(<button className={s.btn} style={style}>{text}</button>)
}

export default Button;