import React from "react";

function Container(props) {
    return <div className="ui container" style={props.style}>{props.children}</div>;
}

export default Container;
