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
        <img
        className="hover:-translate-y-1 duration-300 transition col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src={src}
        alt={alt}
        width={158}
        height={48}
        />
    )
}