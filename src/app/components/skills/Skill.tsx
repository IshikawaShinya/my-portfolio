interface IProps {
    src: string
    alt: string
}

export default function SkillCard(props: IProps) {
    const { src, alt } = props;
    return (
        <img
            className="hover:-translate-y-1 duration-300 transition col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={src}
            alt={alt}
            width={158}
            height={48}
        />
    )
}