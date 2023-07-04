import data from '../data'
import { useEffect, useState } from "react";
export default function LeftPane(props){
    const [option, setOption] = useState("academics")
    return (
        <div className="left-pane">
            <Topbar setOption={setOption}></Topbar>
            <div className="list-view">
                <ListView list={global.data[option]} setState={props.setState}></ListView>
            </div>
        </div>
    )
}

function ListView(props){
    var listView = []
    for(let i=0;i<props.list.length;i++){
        listView.push(<ListViewComponent key={i} data={props.list[i]} setState={props.setState}></ListViewComponent>)
    }
    return listView;
}

function ListViewComponent(props){
    return (
        <div className="lv-component" onClick={() => {
            props.setState(props.data.state)
        }}>
            <div className="img-icon"></div>
            <div className="text-group">
                <span className="header-text">{props.data.header}</span>
                <span className="sub-text">{props.data.subtext}</span>
            </div>
            <div className="time-text">{props.data.time}</div>
        </div>
    )
}

function Topbar(props){
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
                }}>A</button>
                <button id='experience' className="experience action-button" onClick={() => {
                    props.setOption("experience")
                }}>E</button>
                <button id='projects' className="projects action-button" onClick={() => {
                    props.setOption("projects")
                }}>P</button>
                {/* <button id='tools' className="tools action-button" onClick={() => {
                    props.setOption("tools")
                }}>T</button> */}
                <button id='more' className="more action-button" onClick={() => {
                    // props.setOption("more")
                }}>M</button>
            </div>
        </div>
    )
}