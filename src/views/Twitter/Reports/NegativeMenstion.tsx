import React from 'react';
import { Link } from 'react-router-dom';
import { deleteGroupAction, getGroupTweetAction } from '../../../redux/action';
import { filter } from "rxjs"
import { deleteWithToken } from '../../../utils/request';
import { errorPopup, successPopup } from '../../../utils/popupMsg';

interface NegativeMentionsProps {
    item: any;
    index: number
}




const NegativeMentions = (props: NegativeMentionsProps) => {


    const { item, index } = props
    return (
        
           
            <tr> {item.mentions.map((mentions, index) => (
            <>
            <li className="list-unstyled text-justify" id="negative"><a href={`https://twitter.com/${mentions}`} target='_blank'>@{mentions}</a></li></>
            ))}
            </tr> 
       
    );
}

export default NegativeMentions;


