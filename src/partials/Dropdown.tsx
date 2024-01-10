import { IoMdArrowDropdown } from "react-icons/io";

type DropdownProps = {
  title: string;
  values: string[];
};

const Dropdown = ({ title, values }: DropdownProps) => {
  return (
    <div className="flex flex-col text-sm relative">
      <div className="absolute left-0 -top-5 font-semibold text-[#222]">{title}</div>
      <div className="relative">
        <select
          className="py-2 pr-16 pl-2 border border-solid border-[#eee] appearance-none text-xs text-[#999]"
        >
          {values.map((value, i) => (
            <option
              className="text-md" 
              value={value}
              key={i}
            >
              {value}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#222]">
          {/* Down arrow icon */}
          <IoMdArrowDropdown color={"#555"} size={22} />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
