import { useEffect, useState } from "react";
import { useParams } from "react-router";

function JobInfo() {
  const jobId = useParams();
  const [jobData, setData] = useState(null);
  const [isStored, setStored] = useState(false);

  useEffect(() => {
    try {
      const jobObj = localStorage.getItem("current data");
      setStored(true);
      setData(JSON.parse(jobObj).filter((e) => e.id === jobId.identifier));
      console.log(jobData);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <main className="grid">
        <div className="justify-self-center text-center">
          <h1 className="justify-self-center text-2xl font-bold">
            {isStored ? jobData[0].title : null}
            {isStored ? jobData[0].company : null}
          </h1>
          <p>created at: {isStored ? jobData[0].created_at : null}</p>
          <p>
            application deadline:{" "}
            {isStored ? jobData[0].application_deadline : null}
          </p>
          <section>
            <h3 className="text-xl font-bold">Job description</h3>
            <p>{isStored ? jobData[0].description : null}</p>
          </section>
          <p>
            {isStored ? (
              <p>{jobData[0].is_work_remote === 1 ? "remote" : "on-site"}</p>
            ) : null}
          </p>
        </div>
      </main>
    </>
  );
}

export default JobInfo;
