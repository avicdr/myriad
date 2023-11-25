import React from 'react';
import { Link } from 'react-router-dom';
import { deleteGroupAction, getGroupTweetAction } from '../../../redux/action';
import { filter } from "rxjs"
import { deleteWithToken } from '../../../utils/request';
import { errorPopup, successPopup } from '../../../utils/popupMsg';

interface PositivehastagProps {
    item: any;
    index: number
}




const Positivehastag = (props: PositivehastagProps) => {

    console.log(props, "heee")
    const { item, index } = props
    return (


        <tr> {item.hashtags.map((hashtags, index) => (
            <>
                <li className="list-unstyled text-justify" id="list">#{hashtags}</li>
            </>
        ))}
        </tr>


    );
}

export default Positivehastag;


