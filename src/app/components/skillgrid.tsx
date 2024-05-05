
export default function skillgrid(){
    return(
        <div className="py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Skill Set
                </h2>
                {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-2 lg:items-center lg:max-w-4xl lg:grid-cols-4 lg:gap-x-5"> */}
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:items-center sm:max-w-4xl sm:grid-cols-4 sm:gap-x-5">
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
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
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