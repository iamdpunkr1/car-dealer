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
        <h3 className="font-bold text-lg relative top-1">{title}</h3>
        <p>{description}</p>
    </div>
</div>
  )
}

export default Helement