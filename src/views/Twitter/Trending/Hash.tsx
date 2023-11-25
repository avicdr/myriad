import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteGroupAction, getGroupTweetAction } from '../../../redux/action';
import { filter } from "rxjs"
import { deleteWithToken } from '../../../utils/request';
import { successPopup } from '../../../utils/popupMsg';

interface HashProps {
    item: any;
    index: number
}



const HashData = (props: HashProps) => {
    console.log(props)
    const { item, index } = props
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item?.trending_topics[1]?.name}</td>
                <td>{item?.trending_topics[1]?.tweet_volume}</td>
                <td>
                     <img
                        src="https://static.thenounproject.com/png/718767-200.png"
                        alt="none"
                        width="20px"
                        height="20px"
                        className="mx-2"
                    />
                     </td>

            </tr>
        </>
    )
}

export default HashData;
