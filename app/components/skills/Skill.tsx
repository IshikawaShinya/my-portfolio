import Image from 'next/image'
interface IProps {
    src: string
    alt: string
    txt: string
}

export default function SkillCard(props: IProps) {
    const { src, alt, txt } = props;
    return (
        <div className="col-span-2 sm:col-span-1">
            <Image
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