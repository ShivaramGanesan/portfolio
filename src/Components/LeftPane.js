import data from '../data'
import defaults from '../info'
import { useEffect, useState } from "react";
import Dropdown from './Dropdown';
import cloud from '../img/wordcloud2.png'
import shiva from "../img/shiva.jpeg"
import ucrImage from "../img/ucr.png"
import zohoImg from "../img/zoho.png"
import hadoopImg from "../img/hadoop.jpg"


export default function LeftPane(props){
    const [option, setOption] = useState("")
    const [selectedComponent, updateSelectedComponent] = useState(0);
    return (
        <div className="left-pane">
            <Topbar setChatImg={props.setChatImg} setOption={setOption} updateSelectedComponent={updateSelectedComponent} setState={props.setState} option={option}></Topbar>
            {option ? <div className='prev-pane'>
                <button className='prev-button' onClick={()=>{
                    setOption("")
                    props.setState("home")
                }}><i className='left-arrow'></i></button>
                {global.data[option] ? <span> {global.displayText[option]} ({global.data[option].length} items)</span> : null}
            </div> : null}
            
            <div className="list-view">
                <ListView setChatImg={props.setChatImg} list={global.data[option]} setState={props.setState} selectedComponent={selectedComponent} updateSelectedComponent = {updateSelectedComponent}></ListView>
            </div>
        </div>
    )
}

function ListView(props){
    var listView = []
    if(props.list){
        for(let i=0;i<props.list.length;i++){
            listView.push(<ListViewComponent setChatImg={props.setChatImg} img={props.list[i].img} updateSelectedComponent={props.updateSelectedComponent} selectedComponent={props.selectedComponent == i} key={i} index={i} data={props.list[i]} setState={props.setState}></ListViewComponent>)
        }
    }
    else{
        listView = <div className='tools-view'>
            <img className='into-img-left' src={cloud}></img>
            <p>Software is a great combination of artistry and engineering</p>
            <div></div>
        </div>
    }
    return listView;
}

function ListViewComponent(props){
    // const logo = require(props.img)
    // console.log(props.img)
    // console.log(logo);
    return (
        <div key={props.index} className={props.selectedComponent ? "selected-tab" : props.index}>
            <div className='lv-component' onClick={() => {
                props.setState(props.data.state)
                props.updateSelectedComponent(props.index);
                props.setChatImg(props.img)
            }}>
                <img className="img-icon" src={props.img}></img>
                <div className="text-group">
                    <span className="header-text">{props.data.header}</span>
                    <span className="sub-text">{props.data.subtext}</span>
                </div>
                <div className="time-text">{props.data.time}</div>
            </div>
        </div>
    )
}

function Topbar(props){

    const [academicClickStatus, setAcademicClickStatus] = useState(false);
    const [expClickStatus, setExpClickStatus] = useState(false);
    const [projClickStatus, setProjClickStatus] = useState(false);

    var menu = [{
        id: "github",
        "text": "Github"
    },{
        id: "linkedin",
        "text": "LinkedIn"
    },{
        id: "resume",
        "text": "Resume"
    },{
        id: "contact",
        "text": "Contact Me!"
    }]
    const [isMenuVisible, setMenuVisibility] = useState(false);
    var moreClassName = "more-button action-button"
    if(isMenuVisible){
        moreClassName+=" more-selected"
    }
    var expClass = "experience action-button"
    if(props.option == "experience"){
        expClass+=" action-button-selected"
    }
    var projClass = "projects action-button";
    if(props.option == "projects"){
        projClass+=" action-button-selected"
    }
    var acadClass = "academics action-button"
    if(props.option == "academics"){
        acadClass+=" action-button-selected"
    }
    return(
        <div className="top-bar">
            <div className="window-icons">
                <div className="window-icon red-icon" onClick={()=>{
                    window.close()
                }}></div>
                <div className="window-icon yellow-icon"></div>
                <div className="window-icon green-icon" onClick={()=>{
                    document.body.requestFullscreen();
                }}></div>
            </div>
            <img className="profile-icon" src={shiva}></img>
            <div className="action-buttons">
                <div id='academics' className={acadClass} onClick={() => {
                    props.setOption("academics")
                    props.updateSelectedComponent(0);
                    props.setState(global.defaults["academics"]);
                    props.setChatImg(ucrImage)
                    setAcademicClickStatus(true);
                }}>{!academicClickStatus ? <span className='status-icon'></span> : null}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>
              </div>
                <div id='experience' className={expClass} onClick={() => {
                    props.setOption("experience")
                    props.updateSelectedComponent(0);
                    props.setState(global.defaults["experience"]);
                    props.setChatImg(zohoImg)
                    setExpClickStatus(true)
                }}>{!expClickStatus ? <span className='status-icon'></span> : null}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>
                </div>
                <div id='projects' className={projClass} onClick={() => {
                    props.setOption("projects")
                    props.updateSelectedComponent(0);
                    props.setState(global.defaults["projects"]);
                    props.setChatImg(hadoopImg)
                    setProjClickStatus(true)
                }}>{!projClickStatus ? <span className='status-icon'></span> : null}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                </div>
                {/* <button id='tools' className="tools action-button" onClick={() => {
                    props.setOption("tools")
                }}>T</button> */}
                <button id='more' className={moreClassName} onClick={() => {
                    // props.setOption("more")
                    setMenuVisibility(!isMenuVisible)
                }}><i className="down-arrow"></i>
                    {isMenuVisible ? <Dropdown list={menu} clickListener={(id)=>{
                        if(id == "resume"){
                            window.open("https://drive.google.com/file/d/19JTbQCb_ya3SRP5iMyVgltcx0HLVpn8n/view?usp=sharing", "_blank");
                        }
                        else if(id == "linkedin"){
                            window.open("https://www.linkedin.com/in/shivaramganesan/", '_blank');
                        }
                        else if(id == "github"){
                            window.open("https://github.com/ShivaramGanesan", '_blank');
                        }
                        else if(id == "contact"){
                            window.location.href = "mailto:shivaramganesan0406@gmail.com";
                        }
                    }}></Dropdown>: null}
                </button>
            </div>
        </div>
    )
}