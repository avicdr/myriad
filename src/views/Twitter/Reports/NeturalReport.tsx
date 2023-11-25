import React from 'react';
import { Link } from 'react-router-dom';
import { deleteGroupAction, getGroupTweetAction } from '../../../redux/action';
import { filter } from "rxjs"
import { deleteWithToken } from '../../../utils/request';
import { errorPopup, successPopup } from '../../../utils/popupMsg';

interface NeutralReportProps {
    item: any;
    index: number
}




const NeutralReport = (props: NeutralReportProps) => {

    const { item, index } = props
    return (
        <tr> {item.hashtags.map((hashtags, index) => (
            <>
                <li className="list-unstyled text-justify" style={{color:"#f7b466"}}>#{hashtags}</li>
            </>
        ))}
        </tr>
    );
}

export default NeutralReport;

