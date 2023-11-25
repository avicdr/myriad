import React from 'react';
import { Link, } from 'react-router-dom';
import { deleteWithToken } from '../../../utils/request';
import { errorPopup, successPopup } from '../../../utils/popupMsg';



interface AccountDataProps {
    item: any;
    index: number
}
      


const handleDelete = async (id: any) => {
     console.log("hellooooo" , id)
     
    try {
        // perform delete operation here

        await deleteWithToken(`accounts`, {
            "id" : id
        }
        
        )
        successPopup("Account delete successfully");
        setTimeout(() => {
            window.location.reload();
        }, 1000);


       
    } catch (error) {
        errorPopup('Error deleting item.');
    }
};


const AccountData = (props: AccountDataProps) => {
    const {item, index} = props
    return (
        <>
            <tr>
                <th scope="row">{index + 1}.</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.group}</td>
                <td> 
                <Link to={{ pathname: "/twitter/accounts/editaccount", state: { item } }}>

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

export default AccountData;
