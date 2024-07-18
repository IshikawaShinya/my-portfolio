import Image from 'next/image'

export default function History(){
    return(
        <div className="py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    History
                </h2>
                <div 
                className=""
                aria-label="history-card">
                    <Image src="/university.png" height = "64" width = "64" alt="" />
                </div>
            </div>
        </div>
    )
}