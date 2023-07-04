import { useState } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";


export default function(){
    const [state, setState] = useState("home")
    return (
        <div className="window">
            <LeftPane setState = {setState}></LeftPane>
            <RightPane state={state}></RightPane>
        </div>
    )
}