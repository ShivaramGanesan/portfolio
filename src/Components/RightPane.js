import intro from '../img/intro2.png'
import info from '../info'

export default function RightPane(props){
    if(props.state == "home"){
        return (<div className='right-pane'>
            <IntroText/>
        </div>)
    }
    else{
        var headerDetails = global.chatHeader[props.state]
        if(!headerDetails){
            headerDetails = {
                "header": "You",
                "subtext": ""
            }
        }
        return (<div className='right-pane'>
            <TopDummy header={headerDetails.header} subtext={headerDetails.subtext}/><div className='chat-area'><Conversation id={props.state}/></div>
        </div>)
    }
}

function TopDummy(props){
    return (<div className='top-bar'>
        <div className="profile-icon"></div>
        <div className='header-text-top'>
            <span className='top-text'>{props.header}</span>
            <span className='online-text'>{props.subtext}</span>
        </div>
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
            details.push(<IncomingMessageChat key={i} text={detail.text}></IncomingMessageChat>)
        }
        else{
            details.push(<Chat key={i} text={detail.text}></Chat>)
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