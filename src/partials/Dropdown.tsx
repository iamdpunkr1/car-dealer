type DropdownProps = {
    title: string;
    values: string[];
}

const Dropdown = ({title, values}: DropdownProps) => {
  return (
    <select className="px-4">
        <option value="1">{title}</option>
        {
            values.map((value, i) => (
                <option value={value} key={i}>{value}</option>
            ))
        }

    </select>
  )
}

export default Dropdown