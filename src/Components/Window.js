import LeftPane from "./LeftPane";
import RightPane from "./RightPane";


export default function(){
    return (
        <div className="window">
            <LeftPane></LeftPane>
            <RightPane></RightPane>
        </div>
    )
}