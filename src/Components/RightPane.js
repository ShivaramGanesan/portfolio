import intro from '../img/intro2.png'
import info from '../info'
export default function RightPane(props){
    console.log(props.state)
    console.log(props)
    return (
        <div className="right-pane">
            {props.state == "home" && <IntroText/>}
            {props.state != "home" && <div><TopDummy/><div className='chat-area'><Conversation id={props.state}/></div></div>}
        </div>
    )
}

function TopDummy(){
    return (<div className='top-bar'>
        <div className="profile-icon"></div>
        <span>Text</span>
        <span>online</span>
    </div>)
}

function Chat(props){
    return (
        <div className='chat-bubble'>
            {props.text}
        </div>
    )
}

function IncomingMessageChat(props){
    return (
        <div className='incoming-chat-bubble'>
            {props.text}
        </div>
    )
}

function Conversation(props){
    let details = []
    for(let i=0;i<global.info[props.id].length;i++){
        var detail = global.info[props.id][i];
        if(detail.incoming){
            details.push(<IncomingMessageChat text={detail.text}></IncomingMessageChat>)
        }
        else{
            details.push(<Chat text={detail.text}></Chat>)
        }
    }
    return details;
}

function IntroText(){
    return (
        <div className="intro-text">
            <img className="intro-img" src={intro}></img>
            <div>Hi there!  I am </div><h3> Shivaram Ganesan</h3>
            <p>I am a Software engineer with 3 years of work experience</p>
            <div className='tech-stack'>

            </div>
        </div>
    )
}