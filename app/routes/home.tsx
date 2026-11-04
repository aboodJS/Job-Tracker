import { useEffect, useState } from "react";
import JobBox from "~/components/JobBox";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonfakery.com/jobs/paginated")
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((d) => {
        console.log(d.data);
        return d.data;
      })
      .then((d) => {
        setData(d);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <main className="grid grid-rows-5 justify-center h-screen content-evebly">
        <h1 className="text-4xl text-center self-start">Job Tracker</h1>
        <ul className="grid row-start-2 grid-cols-2  gap-5">
          {loading === false && data.length > 0
            ? data.map((e) => <JobBox Id={e.company} name={e.title}></JobBox>)
            : "loading"}
        </ul>
      </main>
    </>
  );
}

export default Home;
