type IconsProps = {
    children: React.ReactNode;
}

const IconsWrapper = ({children}:IconsProps) => {
  return (
    <div className="flex flex-col items-center">
        {children}
    </div>
  )
}

export default IconsWrapper