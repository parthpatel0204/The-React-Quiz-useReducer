export default function EndScreen({ point }) {
  return (
    <div className="flex flex-col align-middle">
      <h2 className="mb-6 text-4xl font-bold">Quiz has finished!</h2>
      <p className="rounded-full bg-[#4d4bbf] px-3 py-3 text-center text-sm text-white">
        You've scored {point} points!
      </p>
    </div>
  );
}

// export default EndScreen;
