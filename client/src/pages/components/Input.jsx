
export default function InputMaker({type, id, label, classes, stater}) {
    return (
        <div className="flex flex-row flex-wrap justify-center mt-4 md:mt-6">
            <label htmlFor={id}>{label}</label>
            <br className="block md:hidden lg:hidden"/>
            <input type={type} id={id} className={`rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px] ${classes ? {classes} : ""} `} onChange={stater}></input>
        </div>
    )
}