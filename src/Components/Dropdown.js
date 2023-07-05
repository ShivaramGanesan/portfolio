export default function Dropdown(props){
    console.log("props in Dropdown")
    console.log(props)
    
    return (
        <div className="dropdown">
            <DropdownMenu list={props.list}></DropdownMenu>
        </div>
    )
}

function DropdownMenu(props){
    console.log("props in Dropdown menu")
    console.log(props)
    var list = props.list;
    let menus = [];
    for(let i=0;i<list.length;i++){
        menus.push(<DropdownComponent item={list[i]} key={i}></DropdownComponent>);
    }
    console.log(menus.length)
    return menus
}

function DropdownComponent(props){
    return (
        <div className="dropdown-component">
            {props.item.text}
        </div>
    )
}