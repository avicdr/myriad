import * as React from "react";

import TextField from "@mui/material/TextField";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { makeStyles } from "@mui/material";

interface Props {
    onSelect: any;
    label: string;
    date?: Date | null;
    format?: string;
    className?: string;
    startDate?: number | null;
    minDate?: any;
    maxDate?: any;
    required?: boolean;
    formSubmitted?: boolean;
}

const CustomDateTimePicker = ({ date, onSelect, label, format = "timestamp", className = "", startDate, ...otherProps }: Props) => {
    const [value, setValue] = React.useState<any>(date || null);

    React.useEffect(() => {
        if (value) {
            let dateIns;
            if (format === "timestamp") {
                dateIns = moment(value.$d).valueOf();
            } else {
                dateIns = moment(value.$d).format(format);
            }
            onSelect(dateIns);
        }
    }, [value]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                className={`date-range-picker ${className}`}
                label={label}
                value={value}
                onChange={(newValue: any) => {
                    setValue(newValue);
                }}
                renderInput={(params: any) => (
                    <React.Fragment>
                        <TextField
                            className="date-input"
                            size="small"
                            {...params}
                            style={{"border-radius": "12px"}}
                            error={otherProps.required && otherProps.formSubmitted && !value}
                        />
                    </React.Fragment>
                )}
                {...otherProps}
            />
        </LocalizationProvider>
    );
};

export default CustomDateTimePicker;
