import React from 'react';
import { Link } from 'react-router-dom';
import { deleteGroupAction, getGroupTweetAction } from '../../../redux/action';
import { filter } from "rxjs"
import { deleteWithToken } from '../../../utils/request';
import { errorPopup, successPopup } from '../../../utils/popupMsg';

interface GroupRowDataProps {
    item: any;
    index: number
}


const handleDelete = async (id: any) => {
    try {
        // perform delete operation here
        await deleteWithToken(`/groups`, {
            'id': id
        })
        successPopup("group delete successfully");
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } catch (error) {
        errorPopup('Error deleting item.');
    }
};

const GroupRowData = (props: GroupRowDataProps) => {
    const { item, index } = props
    return (
        <>
            <tr>
                <td scope="row">{index + 1}.</td>
                <td>{item.name}</td>
                <td>{item.region}</td>
                <td>{item.total_accounts}</td>
                <td>
                    <Link to={{ pathname: "/twitter/accounts/editgroup", state: { item } }}>
                        <img
                            src="https://static.thenounproject.com/png/3391373-200.png"
                            alt="none"
                            width="20px"
                            height="20px"
                            className="mx-2"
                        />
                    </Link>
                    <img
                        src="https://img.icons8.com/material-rounded/256/trash.png"
                        alt="none"
                        width="20px"
                        height="20px"
                        className="mx-2"
                        onClick={() => handleDelete(item.id)}

                    />
                </td>

            </tr>
        </>
    )
}

export default GroupRowData;



