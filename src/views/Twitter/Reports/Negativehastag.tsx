import React from 'react';
import { Link } from 'react-router-dom';
import { deleteGroupAction, getGroupTweetAction } from '../../../redux/action';
import { filter } from "rxjs"
import { deleteWithToken } from '../../../utils/request';
import { errorPopup, successPopup } from '../../../utils/popupMsg';

interface NegativehastagProps {
    item: any;
    index: number
}




const Negativehastag = (props: NegativehastagProps) => {
    const { item, index } = props
    return (
        
           
          <tr> {item.hashtags.map((hashtags, index) => (
            <>
            <li className="list-unstyled" id="negative">#{hashtags}</li></>
            ))}
            </tr>

       
    );
}

export default Negativehastag;



