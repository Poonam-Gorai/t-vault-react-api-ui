import React from "react";
import folder from '../../../assets/icon_folder.png'
import './rightCard.css';

function RightCard(props){

    return(
        <div className='right-card'>
            <img src={folder} className='folder' alt='folderimg'></img>
            <span className='right-card-details'>{props.name}</span>
        </div>
    )
}

export default RightCard;