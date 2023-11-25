import React, { useEffect, useState } from "react";
import { EMAIL_REGEX, URL_REGEX } from "../../utils/config";

type Props = {
    type: "text" | "number" | "email" | "password" | "tel";
    id: string;
    value: string | number;
    onChange: any;
    className: string;
    required?: boolean;
    formSubmitted?: boolean;
    name: string;
    label?: string;
    lang: string;
    error?: string;
    formClass?: string;
    min?: number;
    max?: number;
    maxLength?: number;
    minLength?: number;
    icon?: "currency" | "percentage" | "search";
    onBlur?: any;
    disabled?: boolean;
    fieldType?: string;
    autoFocus?: boolean;
    onKeyDown?: any;
    autoComplete?: string;
    inputMode?: any;
    placeholder?: string;
    hideErrMsg?: boolean;
};
/**
 * @description use this component for input field
 * @author jagannath
 * @date 27/12/2021
 * @param type: "text" | "number",
 * @param id: string
 * @param value: string | number,
 * @param onChange: any,
 * @param className: string,
 * @param required: boolean,
 * @param formSubmitted: boolean,
 * @param name: string,
 * @param label: string,
 * @param lang: string,
 * @param formClass?: string
 */
const InputField = (props: Props) => { 
    const [error, setError] = useState(props.error);
    const [value, setValue] = useState(props.value);
    const optionalProps:any = {};
    if (props.min) optionalProps["min"] = props.min;
    if (props.max) optionalProps["max"] = props.max;
    if (props.maxLength) optionalProps["maxLength"] = props.maxLength;
    if (props.minLength) optionalProps["minLength"] = props.minLength;

    useEffect(() => {
        setError(props.error);
    }, [props.error]);
    useEffect(() => {
        setValue(props.value);
    }, [props.value]);
    const handleValidate = (e: any) => {
        if ((!e.target.value || e.target.value == 0) && e.target.required) {
            e.target.classList.add("field-invalid");
            setError("fieldRequired");
        } else if (e.target.type === "email") {
            if (!e.target.value.match(EMAIL_REGEX)) {
                e.target.classList.add("field-invalid");
                setError("invalidEmail");
            } else {
                e.target.classList.remove("field-invalid");
                setError("");
            }
        } else if (props.fieldType == "url") {
            if (!e.target.value.match(URL_REGEX)) {
                e.target.classList.add("field-invalid");
                setError("invalidLink");
            } else {
                e.target.classList.remove("field-invalid");
                setError("");
            }
        } else {
            e.target.classList.remove("field-invalid");
            e.target.classList.add("field-validated");
            setError("");
        }
        props.onBlur?.()
    };

    return (
        <div className={`form-group d-flex flex-column ${props.formClass || ""}`}>
            <input
                
                id={props.id || props.name || props.label}
                name={props.name || props.label}
                className={`form-field ${props.className}`}
                type={props.type}
                value={value}
                field-invalid={String(props.formSubmitted && !props.value && props.required)}
                field-not-empty={String(!!props.value)}
                onBlur={handleValidate}
                onChange={props.onChange}
                required={!!props.required}
                disabled={!!props.disabled}
                autoFocus={!!props.autoFocus}
                onKeyDown={props.onKeyDown}
                autoComplete={props.autoComplete}
                inputMode={props.inputMode}
                placeholder={props.placeholder}
                {...optionalProps}
            />
            {/* <p className="form-label">{props.label}</p> */}
            <label className={`form-label cursor-text ${props.icon ? "pl-4" : ""}`} htmlFor={props.id || props.name || props.label}>
                {props.label}
            </label>
            {(error || (props.required && props.formSubmitted && !props.value)) && (
                <label hidden={!!props.hideErrMsg} htmlFor={props.id || props.name || props.label} className="error mb-0">
                    Oops. Looks like you missed this.
                </label>
            )}
            {props.icon == "currency" ? <i className={"input-icon icon-left icon-dollar-s fntSz18"}></i> : <></>}
            {props.icon == "percentage" ? <span className={"input-icon icon-right fntSz18"}>%</span> : <></>}
            {props.icon == "search" ? <div className="input-icon icon-left icon-search search-icon fntSz16"></div>: <></>}
        </div>
    );
};

export default InputField;
