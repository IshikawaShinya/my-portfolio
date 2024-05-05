
export default function skillgrid(){
    return(
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Skill Set
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="/react_icon.png"
                    alt="Transistor"
                    width={158}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="/typescript.png"
                    alt="Reform"
                    width={158}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="/next.svg"
                    alt="Tuple"
                    width={158}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="SavvyCal"
                    width={158}
                    height={48}
                    />
                </div>
            </div>
        </div>
    )
}