import data from '../data'
import defaults from '../info'
import { useEffect, useState } from "react";
import Dropdown from './Dropdown';
export default function LeftPane(props){
    const [option, setOption] = useState("academics")
    const [selectedComponent, updateSelectedComponent] = useState(0);
    console.log("current option :: " + option)
    return (
        <div className="left-pane">
            <Topbar setOption={setOption} updateSelectedComponent={updateSelectedComponent} setState={props.setState}></Topbar>
            <div className="list-view">
                <ListView list={global.data[option]} setState={props.setState} selectedComponent={selectedComponent} updateSelectedComponent = {updateSelectedComponent}></ListView>
            </div>
        </div>
    )
}

function ListView(props){
    var listView = []
    for(let i=0;i<props.list.length;i++){
        listView.push(<ListViewComponent updateSelectedComponent={props.updateSelectedComponent} selectedComponent={props.selectedComponent == i} key={i} index={i} data={props.list[i]} setState={props.setState}></ListViewComponent>)
    }
    return listView;
}

function ListViewComponent(props){
    console.log(props.selectedComponent)
    return (
        <div key={props.index} className={props.selectedComponent ? "selected-tab" : props.index}>
            <div className='lv-component' onClick={() => {
                props.setState(props.data.state)
                props.updateSelectedComponent(props.index);
            }}>
                <div className="img-icon"></div>
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

    var menu = [{
        id: "github",
        "text": "Github"
    },{
        id: "linkedin",
        "text": "LinkedIn"
    },{
        id: "resume",
        "text": "Resume"
    }]
    const [isMenuVisible, setMenuVisibility] = useState(false);
    return(
        <div className="top-bar">
            <div className="window-icons">
                <div className="window-icon red-icon"></div>
                <div className="window-icon yellow-icon"></div>
                <div className="window-icon green-icon"></div>
            </div>
            <div className="profile-icon"></div>
            <div className="action-buttons">
                <button id='academics' className="academics action-button" onClick={() => {
                    props.setOption("academics")
                    props.updateSelectedComponent(0);
                    props.setState(global.defaults["academics"]);
                }}>A</button>
                <button id='experience' className="experience action-button" onClick={() => {
                    props.setOption("experience")
                    props.updateSelectedComponent(0);
                    props.setState(global.defaults["experience"]);
                }}>E</button>
                <button id='projects' className="projects action-button" onClick={() => {
                    props.setOption("projects")
                    props.updateSelectedComponent(0);
                    props.setState(global.defaults["projects"]);
                }}>P</button>
                {/* <button id='tools' className="tools action-button" onClick={() => {
                    props.setOption("tools")
                }}>T</button> */}
                <button id='more' className="more action-button" onClick={() => {
                    // props.setOption("more")
                    setMenuVisibility(!isMenuVisible)
                }}>M
                    {isMenuVisible ? <Dropdown list={menu} clickListener={(id)=>{
                        console.log("triggered :: " + id)
                        if(id == "resume"){

                        }
                        else if(id == "linkedin"){
                            window.open("https://www.linkedin.com/in/shivaramganesan/", '_blank');
                        }
                        else if(id == "github"){
                            window.open("https://github.com/ShivaramGanesan", '_blank');
                        }
                    }}></Dropdown>: null}
                </button>
            </div>
        </div>
    )
}