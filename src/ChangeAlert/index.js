import React from "react";
import { withStorageListener } from "./withStorageListener";


function ChangeAlert({show,toggleShow}){
    if(show){
        return(
            <div className="ChangeAlertBackground">
                <div className="ChangeAlert">
                    <p>Has been ocurred some changes...</p>
                    <button className="RefreshButton" onClick={() => toggleShow(false)}>Refresh</button>
                </div>
            </div>
        )
    }else{return null}
}


const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};