import { FunctionComponent, useCallback } from "react";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  const onDashboardIconClick = useCallback(() => {
    // Please sync "Dashboad-v4" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Business Partners Grid - Component" to the project
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    // Please sync "1Quotation Gride - Component" to the project
  }, []);

  const onGroupContainerClick2 = useCallback(() => {
    // Please sync "Expenses - Component" to the project
  }, []);

  const onGroupContainerClick3 = useCallback(() => {
    // Please sync "Manual Journals-Component" to the project
  }, []);

  const onGroupContainerClick4 = useCallback(() => {
    // Please sync "Fixed Assets-Grid" to the project
  }, []);

  const onGroupContainerClick5 = useCallback(() => {
    // Please sync "Reports - Component" to the project
  }, []);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start pt-4 pb-[20.1px] pl-0.5 pr-[3px] relative gap-[43.1px] text-left text-3xs text-white font-fira-sans ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-41102.svg"
      />
      <div className="flex flex-row items-start justify-end py-0 pl-[18px] pr-[17px]">
        <img
          className="h-[45.9px] w-[46px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/group-1171278361@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[199.9px] gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-4">
          <div className="h-11 flex-1 relative z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-1">
              <div className="flex flex-row items-start justify-start py-0 pl-[9px] pr-2">
                <img
                  className="h-7 w-[31.5px] relative cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                  onClick={onDashboardIconClick}
                />
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[49px]">
                Dashboard
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-end justify-start gap-1 cursor-pointer z-[1]"
          onClick={onGroupContainerClick}
        >
          <div className="flex flex-row items-start justify-end py-0 pl-6 pr-[22px]">
            <img
              className="h-7 w-[34.8px] relative"
              loading="lazy"
              alt=""
              src="/vector-6.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative inline-block min-w-[81px]">
              Business Partners
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 pl-[25px] pr-6">
          <div
            className="flex flex-col items-start justify-start gap-1 cursor-pointer z-[1]"
            onClick={onGroupContainerClick1}
          >
            <img
              className="w-[31.5px] h-7 relative"
              loading="lazy"
              alt=""
              src="/vector-7.svg"
            />
            <div className="flex flex-row items-start justify-start py-0 pl-1 pr-[3px]">
              <div className="relative inline-block min-w-[24px]">Sales</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[18px] pr-[17px]">
          <div
            className="h-11 flex-1 relative cursor-pointer z-[1]"
            onClick={onGroupContainerClick2}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-[27.27%] w-full top-[72.73%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-start">
                <div className="relative inline-block min-w-[46px]">
                  Purchases
                </div>
              </div>
              <img
                className="absolute h-[63.64%] w-[53.26%] top-[0%] right-[22.83%] bottom-[36.36%] left-[23.91%] max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/vector-8.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-5 text-center">
          <div
            className="h-11 flex-1 relative cursor-pointer z-[1]"
            onClick={onGroupContainerClick3}
          >
            <img
              className="absolute h-[63.64%] w-[66.83%] top-[0%] right-[16.1%] bottom-[36.36%] left-[17.07%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/vector-9.svg"
            />
            <div className="absolute h-[27.27%] w-full top-[72.73%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-start">
                <div className="relative inline-block min-w-[41px]">
                  Accounts
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[26px]">
            <div
              className="flex flex-col items-start justify-start gap-1 cursor-pointer z-[1] text-center"
              onClick={onGroupContainerClick4}
            >
              <div className="flex flex-row items-start justify-start py-0 pl-[13px] pr-3.5">
                <img
                  className="h-7 w-[28.2px] relative"
                  loading="lazy"
                  alt=""
                  src="/layer-1.svg"
                />
              </div>
              <div className="relative inline-block min-w-[55px]">
                Fixed Assets
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5">
              <div className="h-11 flex-1 relative z-[2]">
                <div className="absolute h-[27.27%] top-[72.73%] bottom-[0%] left-[calc(50%_-_22px)] w-11">
                  <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_22px)] flex flex-row items-start justify-start w-full">
                    <div className="relative inline-block min-w-[44px]">
                      GST Filing
                    </div>
                  </div>
                </div>
                <img
                  className="absolute h-[63.64%] w-[49.09%] top-[0%] right-[23.64%] bottom-[36.36%] left-[27.27%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-10.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px]">
              <div
                className="flex flex-col items-start justify-start gap-1 cursor-pointer z-[1]"
                onClick={onGroupContainerClick5}
              >
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <img
                    className="h-7 w-8 relative"
                    loading="lazy"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="relative inline-block min-w-[36px]">
                  Reports
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] absolute !m-[0] right-[0px] bottom-[378px] left-[0px] bg-mediumorchid z-[1]" />
      <div className="flex flex-row items-start justify-end py-0 pl-[17px] pr-4">
        <img
          className="h-[47.9px] w-12 relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-1171278360.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
