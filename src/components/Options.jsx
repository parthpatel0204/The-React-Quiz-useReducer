function Options({ options, selectOption, selected, correctOption }) {
  return (
    <div className="flex flex-col gap-[40px]">
      {options.map((opt, i) => (
        <button
          style={{
            backgroundColor:
              selected === undefined
                ? ""
                : i === selected
                  ? i === correctOption
                    ? "#bbffbb"
                    : "#ffc0c0"
                  : "",
            cursor: selected !== undefined ? "not-allowed" : "pointer",
          }}
          onClick={() => selectOption(i)}
          key={i}
          disabled={selected !== undefined} // disable all buttons once selected
          className="rounded-full border-[3px] border-[#4d4bbf] px-1 py-2 text-[#4d4bbf] hover:border-[#4d4bbf]"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
