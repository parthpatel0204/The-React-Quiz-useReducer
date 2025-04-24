function AllButton({ children, onClick, disabled }) {
  return (
    <button
      className="rounded-full border-[3px] border-[#4d4bbf] bg-[#4d4bbf] px-5 py-3 text-white hover:bg-white hover:text-[#4d4bbf]"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default AllButton;
