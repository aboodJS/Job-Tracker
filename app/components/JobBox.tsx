import { Link } from "react-router";

function JobBox({ name, Id, company }) {
  return (
    <>
      <li className="w-52 text-center">
        <p>
          <Link to={`/job/${Id}`}>{name}</Link>
        </p>
        <p>{company}</p>
      </li>
    </>
  );
}

export default JobBox;
