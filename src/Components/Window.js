import { useState } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";


export default function(){
    const [state, setState] = useState("home")
    const [chatImg, setChatImg] = useState(null);
    return (
        <div className="window">
            <LeftPane setState = {setState} setChatImg={setChatImg}></LeftPane>
            <RightPane state={state} img={chatImg}></RightPane>
        </div>
    )
}