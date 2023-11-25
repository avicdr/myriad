import React from "react";

const SearchInput = ({ parentClass, ...props }: any) => {
    return (
        <div className={`search-input form-group ${parentClass || ""}`}>
            <input
                type="search"
                id={props.id}
                value={props.value}
                onClick={props.onClick}
                onChange={props.onChange}
                {...props}
                className={`form-field ${props.class}`}
                placeholder={props.placeholder || "Search"}
                style={{ width: props.width }}
            />
            <div className="icon-search search-icon"></div>
        </div>
    );
};

export default SearchInput;
