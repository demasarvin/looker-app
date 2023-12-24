// eslint-disable-next-line react/prop-types
function Button({ name }) {
  return (
    <div className="rounded-md bg-gradient-to-b from-violet-500 to-violet-800 px-8 py-2 w-fit font-primary">
      {name}
    </div>
  );
}

export default Button;
