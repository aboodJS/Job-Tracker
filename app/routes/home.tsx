import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(null);
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
      <p>{loading === false && data !== null ? data[0].title : "loading"}</p>
    </>
  );
}

export default Home;
