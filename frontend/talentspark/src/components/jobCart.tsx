import type { job } from "../types/job";

type Props = {
  jobs: job[];
};

function JobCart({ jobs }: Props) {
  const primary = jobs[0];
  return (
    <div style={{ textAlign: "center" }}>
      {primary ? (
        <>
          <h1 className="job-title">{primary.title}</h1>
          <div className="company-details">
            <p>Google</p>
            <p>Bangalore</p>
            <p>5 LPA</p>
          </div>
        </>
      ) : (
        <>
          <h1 className="job-title">Software Engineer</h1>
          <div className="company-details">
            <p>Google</p>
            <p>Bangalore</p>
            <p>5 LPA</p>
          </div>
        </>
      )}
    </div>
  );
}

export default JobCart;