import { useEffect, useState } from "react";
import JobBox from "~/components/JobBox";

function Home() {
  const [data, setData] = useState([]);
  const [obj, setObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentUrl, setUrl] = useState(
    "https://jsonfakery.com/jobs/paginated",
  );

  useEffect(() => {
    fetch(currentUrl)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((d) => {
        console.log(d);
        localStorage.setItem("current data", JSON.stringify(d.data));
        setObj(d);
        return d.data;
      })
      .then((d) => {
        setData(d);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [currentUrl]);

  return (
    <>
      <main className="grid grid-rows-6 justify-center h-screen content-evebly">
        <h1 className="text-4xl text-center self-start">Job Tracker</h1>
        <ul className="grid row-start-2 grid-cols-2  gap-5">
          {loading === false && data.length > 0 ? (
            data.map((e) => (
              <JobBox company={e.company} Id={e.id} name={e.title}></JobBox>
            ))
          ) : (
            <p className="h-28 justify-self-center self-center animate-spin w-28 rounded-full border-4  border-b-transparent"></p>
          )}
        </ul>
        <div className="flex gap-6 row-start-6 justify-self-center">
          {loading === false && data.length > 0 ? (
            <>
              <p
                onClick={() => {
                  if (obj.prev_page_url !== null) {
                    setUrl(obj.prev_page_url);
                  }
                }}
                className="hover:underline cursor-pointer"
              >
                prev
              </p>
              <p>{obj.current_page}</p>
              <p
                onClick={() => {
                  if (obj.next_page_url !== null) {
                    setUrl(obj.next_page_url);
                  }
                }}
                className="hover:underline cursor-pointer"
              >
                next
              </p>
            </>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default Home;
