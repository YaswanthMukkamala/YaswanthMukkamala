import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Content from "../components/Content";
import GroupComponent1 from "../components/GroupComponent1";
import Data from "../components/Data";

const GSTR1Component: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[15px] pb-[217px] pl-[82px] pr-12 box-border gap-[26px] leading-[normal] tracking-[normal] text-left text-sm text-black font-fira-sans mq750:pl-[41px] mq750:pr-6 mq750:box-border">
      <div className="w-[1344px] h-px absolute !m-[0] top-[72px] right-[-1px] border-honeydew border-t-[1px] border-solid box-border" />
      <Content />
      <div className="w-[191px] flex flex-row items-start justify-start relative">
        <img
          className="h-2 w-1 absolute !m-[0] top-[3px] left-[91px] object-contain"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <div className="flex-1 flex flex-row items-start justify-end">
          <div className="relative font-medium inline-block min-w-[80px]">
            GSTR-1 (B2B)
          </div>
        </div>
        <img
          className="h-[15.6px] w-3.5 absolute !m-[0] top-[-1px] left-[61px]"
          loading="lazy"
          alt=""
          src="/group-1171275558.svg"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <GroupComponent1 />
        <Data />
      </section>
      <Autocomplete
        className="w-[199px] h-[251px]"
        sx={{ width: 199 }}
        disablePortal
        options={[] as any}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label=""
            variant="standard"
            placeholder=""
            helperText=""
          />
        )}
      />
      <img
        className="w-[26px] h-[26px] absolute !m-[0] top-[88px] right-[50px]"
        loading="lazy"
        alt=""
        src="/group-1171279100.svg"
      />
    </div>
  );
};

export default GSTR1Component;
