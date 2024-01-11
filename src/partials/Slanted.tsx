type SlantedProps = {
    bg: string;
}
const Slanted = ({bg}:SlantedProps) => {
  return (
        <div className="section_curve hidden md:block" >
            <svg width="100%" data-height={70} height="70px"  >
            <defs>
                <pattern
                id="pix-decor-shape-145885930"
                preserveAspectRatio="none"
                patternUnits="userSpaceOnUse"
                x={0}
                y={0}
                width="100%"
                data-height={70}
                height={700}
                viewBox="0 0 100 1000"
                >
                <polygon
                    fill={bg}
                    points="0,100 0,100 10,100 15,40 85,40 90,100 100,100  100,100 "
                />
                </pattern>
            </defs>
            <rect
                x={0}
                y={0}
                width="100%"
                data-height={70}
                height={70}
                fill="url(#pix-decor-shape-145885930)"
            />
            
            </svg>
        </div>
  )
}

export default Slanted