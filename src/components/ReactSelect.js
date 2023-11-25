import React, { useState } from "react";
import Select from "react-select";
import InstagramLogo from "./Static/Instagram.png";
import FacebookLogo from "./Static/FacebookLogo.png";
import TwitterLogo from "./Static/TwitterLogo.png";
import Alllogo from "./Static/Component.png";
import { Link } from "react-router-dom";

const options = [
    {
        value: "Twitter",
        label: (
            <Link to={"/"} className='col-12 p-0'>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Poppins",
                        fontWeight: 900,
                        fontSize: "18px",
                      
                    
                    }}
                    // className='col-12 justify-content-start '
                >
                    <img src={TwitterLogo} alt="twitter" className="mr-2 "  />
                    <div className="">Twitter</div>
                </div>
            </Link>
        ),
    },
    // {
    //     value: "Instagram",
    //     label: (
    //         <Link to={"/instagram/dashboard"}  className='col-12 p-0'>
    //             <div
    //                 style={{
    //                     display: "flex",
    //                     alignItems: "center",
    //                     fontFamily: "Poppins",
    //                     fontWeight: 900,
    //                     fontSize: "18px",
    //                     // ,color:"black"
    //                     marginLeft: "3px",
    //                 }}
    //             >
    //                 <img src={InstagramLogo} alt="insta" style={{ marginRight: "10px" }} />
    //                 <div>Instagram</div>
    //             </div>
    //         </Link>
    //     ),
    // },
    {
        value: "Facebook",
        label: (
            <Link to={"/facebook/dashboard"}  className='col-12 p-0'>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Poppins",
                        fontWeight: 900,
                        fontSize: "18px",
                        // color:"black"
                        marginLeft: "3px",
                    }}
                >
                    <img src={FacebookLogo} alt="facebook" style={{ marginRight: "10px" }} />
                    <div>Facebook</div>
                </div>
            </Link>
        ),
    },
    // {
    //     value: "AllPlateforms",
    //     label: (
    //         <Link to={"/allplateforms/PostSmart/post"}>
    //             <div
    //                 style={{
    //                     display: "flex",
    //                     alignItems: "center",
    //                     fontFamily: "Poppins",
    //                     fontWeight: 900,
    //                     fontSize: "18px",
    //                     // color:"black"
    //                     marginLeft: "2px",
    //                 }}
    //             >
    //                 <img
    //                     src={Alllogo}
    //                     alt="facebook"
    //                     style={{ marginRight: "10px" }}
    //                 />
    //                 <div>All Platforms</div>
    //             </div>
    //         </Link>
    //     ),
    // },
];

const ReactSelect = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]); // set default value to first option

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            height: "50px",
            padding: "10px 10px",
            // background: state.isSelected ? "#007bff" : "#fff",
            color: state.isSelected ? "white" : "black",
            color: "black",
        }),
        singleValue: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
        }),
        control: (provided) => ({
            ...provided,
            border: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
            "&:hover": {
                border: "none",
                color: "black",
            },
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: "0 10px",
            color: "black",
        }),
        indicatorSeparator: () => null, // remove the vertical line
    };

    return (
        <div className="px-3 pb-3">
            <div className="cBox w-100">
                <p className="color-light cBoxTitle">Dashboard</p>
                <Select
                    defaultValue={options[0]} // set default value to first option
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    styles={customStyles}
                    isSearchable={false}
                />
            </div>
        </div>
    );
};

export default ReactSelect;
