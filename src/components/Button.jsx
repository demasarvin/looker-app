// eslint-disable-next-line react/prop-types
function Button({ name }) {
  return (
    <button className="rounded-md bg-gradient-to-b from-violet-500 to-violet-800 px-8 py-2 font-primary cursor-pointer w-full">
      {name}
    </button>
  );
}

export default Button;
