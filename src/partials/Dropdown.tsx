import { IoMdArrowDropdown } from "react-icons/io";

type DropdownProps = {
  title: string;
  values: string[];
};

const Dropdown = ({ title, values }: DropdownProps) => {
  return (
    <div className="flex flex-col text-sm relative w-[95%] md:max-w-[20%] lg:max-w-[20%] mx-auto">
      <div className="absolute hidden lg:block left-0 -top-5 font-semibold text-[#222]">{title}</div>

      <div className="relative">
        <select
          className="w-full py-2 pl-2 pr-2 lg:pr-8 bg-white border border-solid border-[#eee] appearance-none text-xs text-[#999]"
        >
          {values.map((value, i) => (
            <option
              className="option text-md hover:bg-[#ecba00] hover:text-white" 
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
