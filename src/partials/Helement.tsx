type HelementProps = {
    title: string;
    description: string;
    logo: React.ReactNode;
}


const Helement = ({title, description, logo }: HelementProps) => {
  return (
    <div className="flex items-center">
    {logo}
    <div className="ml-2">
        <h3 className="font-bold text-md relative ">{title}</h3>
        <p className="text-sm">{description}</p>
    </div>
</div>
  )
}

export default Helement