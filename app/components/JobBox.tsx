function JobBox({ name, Id }) {
  return (
    <>
      <li className="w-52 text-center">
        <p>{name}</p>
        <p>{Id}</p>
      </li>
    </>
  );
}

export default JobBox;
