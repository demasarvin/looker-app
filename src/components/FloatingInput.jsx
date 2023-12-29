// eslint-disable-next-line react/prop-types
function FloatingInput({ label, type, placeholder, value, onChange, isRequired }) {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        name={label}
        id={label}
        className="peer block w-full appearance-none rounded-md border border-gray-400 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-0"
        placeholder=" "
        value={value}
        onChange={onChange}
        min={label === 'job_status' ? 0 : undefined}
        max={label === 'job_status' ? 1 : undefined}
        required={isRequired}
      />
      <label
        htmlFor={label}
        className={`absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm capitalize text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-violet-500 ${isRequired ? 'required' : ''}`}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default FloatingInput;
