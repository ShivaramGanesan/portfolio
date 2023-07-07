import intro from '../img/intro2.png'
import info from '../info'
import wabg from '../img/wa-bg.png'

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
            <TopDummy img={props.img} header={headerDetails.header} subtext={headerDetails.subtext}/>
            <div className='chat-area'>
                <Conversation id={props.state}/>
            </div>
        </div>)
    }
}

function TopDummy(props){
    return (<div className='top-bar top-bar-right'>
        <img className="profile-icon" src={props.img}></img>
        <div className='header-text-top'>
            <span className='top-text'>{props.header}</span>
            <span className='online-text'>{props.subtext}</span>
        </div>
    </div>)
}

function Chat(props){
    let textClass = 'chat-bubble';
    if(props.detail.link){
        textClass += " chat-link"
    }
    return (
        <div className={textClass} onClick={()=>{
            if(props.detail.link){
                window.open(props.detail.link, "_blank");
            }
        }}>
            {props.detail.text}
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
            details.push(<Chat key={i} detail={detail}></Chat>)
        }
    }
    return details;
}

function IntroText(){
    return (
        <div className="intro-text">
            <img className="intro-img" src={intro}></img>
            <div>Hi there!  I am </div><h3> Shivaram Ganesan</h3>
            <div className='intro-text-div'>
                <p className='intro-para'>I am a passionate and experienced software engineer with a strong focus on API development and product integrations. Throughout my career, I have successfully delivered impactful solutions by leveraging my expertise in these areas. I thrive in collaborative environments and possess excellent communication skills, allowing me to effectively work with cross-functional teams and drive successful outcomes.</p>
            <p className='intro-para'>While my core interest lies in product development, I have a natural curiosity and a desire to continuously learn and expand my skill set. I stay up-to-date with the latest technologies, including artificial intelligence (AI) and machine learning (ML), as I believe in their potential to revolutionize the industry. With a ready-to-learn mindset, I eagerly embrace new challenges and opportunities to acquire new knowledge and skills.</p>
            <p className='intro-para'>Please feel free to browse through the conversations to gain a deeper understanding of the value I bring and the projects I have worked on.</p>
            </div>
            <div className='tech-stack'>

            </div>
        </div>
    )
}