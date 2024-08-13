import { FunctionComponent } from "react";

export type DataType = {
  className?: string;
};

const Data: FunctionComponent<DataType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-5 box-border max-w-full text-left text-sm text-black font-fira-sans ${className}`}
    >
      <div className="w-[1248px] rounded-lg bg-white border-gainsboro border-[1px] border-solid box-border flex flex-col items-end justify-start pt-0 px-0 pb-5 max-w-full">
        <div className="self-stretch h-[347px] relative rounded-lg bg-white border-gainsboro border-[1px] border-solid box-border hidden" />
        <div className="self-stretch rounded-tl-md rounded-tr-8xs rounded-b-none bg-cornflowerblue overflow-x-auto flex flex-row items-start justify-start pt-[10.4px] px-4 pb-[12.5px] gap-[121px] z-[2] text-white mq450:gap-[30px] mq750:gap-[60px]">
          <div className="h-[42.5px] w-[1246px] relative rounded-tl-md rounded-tr-8xs rounded-b-none bg-cornflowerblue shrink-0 hidden" />
          <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-9 text-center">
            <div className="relative font-black inline-block min-w-[105px] z-[3]">
              No.of Recipients
            </div>
          </div>
          <div className="relative font-black inline-block min-w-[90px] z-[3]">
            No.of Invoices
          </div>
          <div className="relative font-black inline-block min-w-[120px] z-[3]">
            Total Invoice Value
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[18.6px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start pt-[12.4px] px-16 pb-[9.4px] box-border relative gap-[221px] max-w-full z-[1] mq450:gap-[55px] mq750:flex-wrap mq750:gap-[110px] mq750:pl-8 mq750:pr-8 mq750:box-border">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/group-1171279261.svg"
            />
            <div className="w-[34px] flex flex-col items-start justify-start pt-[2.1px] pb-0 pl-0 pr-5 box-border">
              <div className="relative font-medium inline-block min-w-[8px] z-[1]">
                4
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0">
              <div className="relative font-medium inline-block min-w-[8px] z-[1]">
                4
              </div>
            </div>
            <div className="relative font-medium text-right inline-block min-w-[61px] z-[1]">
              33,900.00
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[16.6px] pl-4 pr-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-0.5 box-border gap-2.5 max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-3 box-border gap-[9.5px] min-w-[243px] max-w-full mq450:flex-wrap">
              <div className="relative font-semibold text-center z-[1]">
                GSTIN/UIN of Recipient
              </div>
              <div className="relative font-semibold inline-block min-w-[95px] z-[1]">
                Receiver Name
              </div>
              <div className="relative font-semibold inline-block min-w-[100px] z-[1]">
                Invoice Number
              </div>
            </div>
            <div className="w-[115px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
              <div className="relative font-semibold inline-block min-w-[79px] z-[1]">
                Invoice Date
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-1.5 text-right">
              <div className="relative font-semibold inline-block min-w-[84px] z-[1]">
                Invoice Value
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px] text-right">
              <div className="relative font-semibold inline-block min-w-[100px] z-[1]">
                Place Of Supply
              </div>
            </div>
            <div className="relative font-semibold inline-block min-w-[99px] z-[1]">
              Reverse Charge
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
              <div className="relative font-semibold whitespace-pre-wrap z-[1]">
                Applicable % of Tax Rate
              </div>
            </div>
            <div className="relative font-semibold inline-block min-w-[79px] z-[1]">
              Invoice Type
            </div>
            <div className="relative font-semibold inline-block min-w-[121px] z-[1]">
              E-Commerce GSTIN
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[21.8px] box-border gap-[19.7px] max-w-full">
          <div className="self-stretch bg-whitesmoke flex flex-row items-start justify-start pt-[11.4px] px-4 pb-[13.4px] box-border gap-[231px] max-w-full z-[1] lg:flex-wrap lg:gap-[115px] mq450:gap-[29px] mq750:gap-[58px]">
            <div className="h-[43.5px] w-[1246px] relative bg-whitesmoke hidden max-w-full" />
            <div className="flex flex-row items-start justify-start gap-[46px] max-w-full mq450:gap-[23px] mq1050:flex-wrap">
              <div className="relative text-center inline-block min-w-[111px] z-[2]">
                36AENFS8191R1ZR
              </div>
              <div className="w-[338px] flex flex-row items-start justify-between py-0 pl-0 pr-[43px] box-border max-w-full gap-5 mq450:flex-wrap mq450:justify-center mq450:pr-5 mq450:box-border">
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px]">
                  <div className="relative inline-block min-w-[56px] z-[2]">
                    Sandeep
                  </div>
                </div>
                <div className="relative inline-block min-w-[82px] z-[2]">
                  INV-2024-024
                </div>
                <div className="relative inline-block min-w-[68px] z-[2]">
                  02-01-2024
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[30px] gap-4 text-right">
                <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                  <div className="relative inline-block min-w-[52px] z-[2]">
                    5,200.00
                  </div>
                </div>
                <div className="relative text-left inline-block min-w-[84px] z-[2]">
                  36-Telangana
                </div>
              </div>
              <div className="relative inline-block min-w-[10px] z-[2] mq1050:w-full mq1050:h-2.5">
                N
              </div>
            </div>
            <div className="relative inline-block min-w-[76px] z-[2]">
              Regular B2B
            </div>
          </div>
          <div className="w-[1118px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[47px] max-w-full mq450:gap-[23px] mq1050:flex-wrap">
                <div className="relative text-center inline-block min-w-[110px] z-[1]">
                  36AZFPM7192K1ZS
                </div>
                <div className="w-[337px] flex flex-row items-start justify-between py-0 pl-0 pr-[46px] box-border max-w-full gap-5 mq450:flex-wrap mq450:justify-center mq450:pr-5 mq450:box-border">
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5">
                    <div className="relative inline-block min-w-[45px] z-[1]">
                      Harsha
                    </div>
                  </div>
                  <div className="relative inline-block min-w-[82px] z-[1]">
                    INV-2024-023
                  </div>
                  <div className="relative inline-block min-w-[64px] z-[1]">
                    15-12-2023
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[29px] gap-4 text-right">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative inline-block min-w-[52px] z-[1]">
                      5,500.00
                    </div>
                  </div>
                  <div className="relative text-left inline-block min-w-[84px] z-[1]">
                    36-Telangana
                  </div>
                </div>
                <div className="relative inline-block min-w-[10px] z-[1] mq1050:w-full mq1050:h-2.5">
                  N
                </div>
              </div>
              <div className="relative inline-block min-w-[76px] z-[1]">
                Regular B2B
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19.7px] max-w-full">
          <div className="self-stretch bg-whitesmoke flex flex-row items-start justify-start pt-[11.4px] px-4 pb-[13.5px] box-border gap-[231px] max-w-full z-[1] lg:flex-wrap lg:gap-[115px] mq450:gap-[29px] mq750:gap-[58px]">
            <div className="h-[43.5px] w-[1246px] relative bg-whitesmoke hidden max-w-full" />
            <div className="flex flex-row items-start justify-start gap-[54px] max-w-full mq450:gap-[27px] mq1050:flex-wrap">
              <div className="relative text-center inline-block min-w-[103px] z-[2]">
                36AKIPG5713C1ZJ
              </div>
              <div className="w-[322px] flex flex-row items-start justify-between py-0 pl-0 pr-[30px] box-border max-w-full gap-5 mq450:flex-wrap mq450:justify-center">
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3">
                  <div className="relative inline-block min-w-[53px] z-[2]">
                    Lakshmi
                  </div>
                </div>
                <div className="relative inline-block min-w-[82px] z-[2]">
                  INV-2024-022
                </div>
                <div className="relative inline-block min-w-[65px] z-[2]">
                  20-11-2023
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[22px] gap-4 text-right">
                <div className="w-[60px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch relative inline-block min-w-[60px] z-[2]">
                    10,000.00
                  </div>
                </div>
                <div className="relative text-left inline-block min-w-[84px] z-[2]">
                  36-Telangana
                </div>
              </div>
              <div className="relative inline-block min-w-[10px] z-[2] mq1050:w-full mq1050:h-2.5">
                N
              </div>
            </div>
            <div className="relative inline-block min-w-[76px] z-[2]">
              Regular B2B
            </div>
          </div>
          <div className="w-[1118px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[45px] max-w-full mq450:gap-[22px] mq1050:flex-wrap">
                <div className="relative text-center inline-block min-w-[112px] z-[1]">
                  36ABFFR2977K1ZM
                </div>
                <div className="w-[60px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                  <div className="relative inline-block min-w-[27px] z-[1]">
                    Ajay
                  </div>
                </div>
                <div className="w-[228px] flex flex-row items-start justify-start py-0 pl-0 pr-[38px] box-border gap-[41px]">
                  <div className="relative inline-block min-w-[81px] z-[1]">
                    INV-2024-021
                  </div>
                  <div className="relative inline-block min-w-[68px] z-[1]">
                    05-07-2023
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[31px] gap-4 text-right">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative inline-block min-w-[58px] z-[1]">
                      13,200.00
                    </div>
                  </div>
                  <div className="relative text-left inline-block min-w-[84px] z-[1]">
                    36-Telangana
                  </div>
                </div>
                <div className="relative inline-block min-w-[10px] z-[1] mq1050:w-full mq1050:h-2.5">
                  N
                </div>
              </div>
              <div className="relative inline-block min-w-[76px] z-[1]">
                Regular B2B
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
