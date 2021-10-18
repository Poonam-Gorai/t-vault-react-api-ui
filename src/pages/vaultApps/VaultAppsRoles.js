import React from "react";
import {useLocation} from "react-router-dom";

function VaultAppsPage(){

    const useQ =()=> {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQ();
    let test = query.get("queryname");
    let age = query.get("age");
    

    return <div>Vault Apps Page 
        <br/>
        {test}
        <br/>
        {age}
    </div>
}

export default VaultAppsPage;