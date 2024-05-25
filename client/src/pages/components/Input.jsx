
export default function InputMaker({type, id, label, classes, stater}) {
    return (
        <div className="flex flex-col md:flex-row items-center flex-wrap md:justify-center mt-4 md:mt-6">
            <label htmlFor={id} className="mb-3 md:mb-0">{label}</label>
            {/* <br className="md:hidden lg:hidden"/> */}
            <input type={type} id={id} className={`rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] lg:w-[200px] focus-within:outline-green-200 ml-2 md:ml-3 lg:ml-4  ${classes ? {classes} : ""} `} onChange={stater} required></input>
        </div>
    )
}