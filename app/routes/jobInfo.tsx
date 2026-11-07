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
      <main>
        <h1>{isStored ? jobData.title : null}</h1>
      </main>
    </>
  );
}

export default JobInfo;
