import { useEffect, useState } from "react";
import JobBox from "~/components/JobBox";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonfakery.com/jobs")
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((d) => {
        console.log(data);
        return d;
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
      <h1 className="text-4xl">hello world</h1>
      <ul>
        {loading === false && data.length > 0
          ? data.map((e) => <JobBox Id={e.id} name={e.title}></JobBox>)
          : "loading"}
      </ul>
    </>
  );
}

export default Home;
