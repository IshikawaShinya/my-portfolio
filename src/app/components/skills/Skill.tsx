interface IProps {
    src: string
    alt: string
    txt: string
}

export default function SkillCard(props: IProps) {
    const { src, alt, txt } = props;
    return (
        // <div className="flex flex-col items-center col-span-2 max-h-12 w-full  sm:flex sm:flex-col sm:max-h-32 sm:items-center sm:col-span-1">
        //     <img
        //         className="object-cover h-full hover:-translate-y-1 duration-300 transition "
        //         src={src}
        //         alt={alt}
        //         width={158}
        //         height={48}
        //     />
        //     <p>{txt}</p>
        // </div>
        <div className="col-span-2 sm:col-span-1">
            <img
            className="hover:-translate-y-1 duration-300 transition  max-h-12 w-full object-contain "
            src={src}
            alt={alt}
            width={158}
            height={48}
            />
            <p className="text-center ">{txt}</p>
        </div>
    )
}