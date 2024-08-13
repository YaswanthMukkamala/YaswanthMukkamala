import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[86px] !m-[0] absolute bottom-[-454px] left-[-70px] flex flex-row items-start justify-start z-[1] text-left text-3xs text-white font-fira-sans ${className}`}
    >
      <GroupComponent />
    </div>
  );
};

export default GroupComponent1;
