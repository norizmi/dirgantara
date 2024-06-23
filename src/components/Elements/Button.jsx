/* eslint-disable react/prop-types */
function Button(props) {
  const { children } = props;

  return (
    <>
      <button className=" bg-nav-grey border-none text-neutral-950 w-1/2 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded hover:bg-neutral-700 hover:text-neutral-50">
        <a href="/">{children}</a>
      </button>
    </>
  );
}

export default Button;
