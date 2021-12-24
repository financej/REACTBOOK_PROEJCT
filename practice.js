import React from 'react'
import {useEffect, useState} from "./react.development";

function App(){
    const [pageName, setPageName] = useState('');
    useEffect(() = > {
        widow.onpopstate = function(event){
            setPageName(event.state)
        }
    }, []);
    return(
        <div>
            <button onClick = {onClick1}>page1</button>
            <button onClick = {onClick1}>page2</button>
        </div>

    )
}