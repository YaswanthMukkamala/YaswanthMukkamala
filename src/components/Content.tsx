import { FunctionComponent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Dropdown, SplitButton } from "react-bootstrap";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  const [containerDateTimePickerValue, setContainerDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`self-stretch flex flex-row items-start justify-end pt-0 px-0.5 pb-[13px] box-border max-w-full ${className}`}
      >
        <header className="w-[1248px] flex flex-row items-end justify-between gap-5 max-w-full">
          <div className="h-[37px] w-[592px] max-w-full">
            <DatePicker
              value={containerDateTimePickerValue}
              onChange={(newValue: any) => {
                setContainerDateTimePickerValue(newValue);
              }}
              sx={{
                fieldset: {
                  borderColor: "transparent",
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                },
                "&:hover": {
                  fieldset: { borderColor: "transparent" },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
                "& input::placeholder": { textColor: "#02020a", fontSize: 20 },
                input: {
                  color: "#02020a",
                  fontSize: 20,
                  textAlign: "left",
                  fontWeight: "700",
                },
                "& .MuiInputBase-root": {
                  height: 37,
                  gap: "82px",
                  flexDirection: { flexDirection: "row" },
                },
              }}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: false,
                  required: false,
                  autoFocus: false,
                  error: false,
                  color: "primary",
                  placeholder: "Accounting",
                },
                openPickerIcon: {
                  component: () => (
                    <img width="4px" height="8px" src="/vector.svg" />
                  ),
                },
              }}
              label="Ziraff"
            />
          </div>
          <div className="w-[186px] flex flex-row items-start justify-start gap-[22.5px]">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-[24.5px] h-7 relative"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <img
                className="w-[22px] h-[22px] relative"
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div className="h-[35px] w-[7.5px] flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-1.5 box-border">
              <div className="w-px h-[31px] relative border-gainsboro border-r-[1px] border-solid box-border" />
            </div>
            <SplitButton
              className="h-10 flex-1"
              style={{ width: "100%", height: "40" }}
            >{` `}</SplitButton>
          </div>
        </header>
      </div>
    </LocalizationProvider>
  );
};

export default Content;
