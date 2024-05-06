import SkillCard from "../skills/Skill"

type SkillInfo = {
    src: string,
    alt: string,
}

const mySkillInfos: SkillInfo[] = [
    {
        src: "/react_icon.png",
        alt: "Transistor"
    },
    {
        src: "/typescript.png",
        alt: "Reform",
    },
    {
        src: "/next.svg",
        alt: "Tuple",
    },
    {
        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
        alt: "SavvyCal",
    },
]

export default function Skillgrid(){
    return(
        <div className="py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Skill Set
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:items-center sm:max-w-4xl sm:grid-cols-4 sm:gap-x-5">
                    {mySkillInfos.map((skillInfo, index) => (
                        <SkillCard key={`${skillInfo.src}-${index}`} src={skillInfo.src} alt={skillInfo.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}