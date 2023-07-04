import intro from '../img/intro.png'
export default function RightPane(){
    return (
        <div className="right-pane">
            <IntroText/>
        </div>
    )
}

function IntroText(){
    return (
        <div className="intro-text">
            <img className="intro-img" src={intro}></img>
            <div>Hi there!  I am <span> Shivaram Ganesan</span> </div>
            
        </div>
    )
}