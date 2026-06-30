import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CompanyCard from "./components/CompanyCard";
import JobCart from "./components/jobCart";
import { useEffect, useState } from "react";
import { getCompanies } from "./Services/CompanyServices";
import { getJobs } from "./Services/JobServices";
import type { company } from "./types/Company";
import type { job } from "./types/job";

const fallbackCompanies: company[] = [
  {
    id: 1,
    name: "Google",
    email: "info@google.com",
    phone: "123-456-7890",
    address: "1600 Amphitheatre Parkway",
    location: "Mountain View, CA",
    jobs: [],
  },
  {
    id: 2,
    name: "Microsoft",
    email: "contact@microsoft.com",
    phone: "425-882-8080",
    address: "One Microsoft Way",
    location: "Redmond, WA",
    jobs: [],
  },
];

const fallbackJobs: job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Build user interfaces with React.",
    salary: 120000,
    company_id: 1,
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Develop APIs using Python and FastAPI.",
    salary: 130000,
    company_id: 2,
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);
  const [companies, setCompanies] = useState<company[]>([]);
  const [jobs, setJobs] = useState<job[]>([]);

  async function fetchCompanies() {
    try {
      const companies = await getCompanies();
      setCompanies(companies);
    } catch (error) {
      setOffline(true);
      setCompanies(fallbackCompanies);
    }
  }

  async function fetchJobs() {
    try {
      const jobs = await getJobs();
      setJobs(jobs);
    } catch (error) {
      setOffline(true);
      setJobs(fallbackJobs);
    }
  }

  async function loadData() {
    setLoading(true);
    await Promise.all([fetchCompanies(), fetchJobs()]);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div id="center">
        <Welcome />
        <br />
        {offline && (
          <div style={{ color: "red", margin: "16px 0" }}>
            Unable to load live data. Showing fallback content.
          </div>
        )}
        <JobCart jobs={jobs} />
        <CompanyCard companies={companies} />
      </div>
      <Footer />
    </>
  );
}

export default App;