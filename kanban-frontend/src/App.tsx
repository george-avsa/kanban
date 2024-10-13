import clsx from "clsx";

function App() {
  const constant = true;

  return (
    <h1
      className={clsx(
        "text-3xl font-bold text-blue-500 underline ",
        constant && "flex"
      )}
    >
      Hello world!
    </h1>
  );
}

export default App;
