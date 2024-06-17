export default function Input({ type, id, label, classes, stater }) {
  return (
    <div className="flex flex-col md:flex-row items-center flex-wrap md:justify-center mt-4 md:mt-6">
      {label ? (
        <label
          htmlFor={id}
          className="mb-3 md:mb-0 font-semibold lg:text-[2.63vh] basis-full"
        >
          {label}
        </label>
      ) : null}
      <input
        type={type}
        id={id}
        className={`rounded border-gray-700 px-2 py-1 w-[200px] md:w-[200px] xl:w-[200px] focus-within:outline-green-200 ml-2 md:ml-3 xl:ml-4 
        ${classes ? classes : ""}  xl:basis-3/5 xl:mt-4 `}
        onChange={stater}
        required
      ></input>
    </div>
  );
}
