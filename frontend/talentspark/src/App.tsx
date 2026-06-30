import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CompanyCard from "./components/CompanyCard";
import JobCart from "./components/jobCart";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import { getJobs } from "./Services/JobServices";
import type {company} from "./types/Company";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [companies, setCompanies] = useState<company[]>([]);

  async function fetchCompanies() {
    setLoading(true);
    try {
      const companies = await getCompanies();
      setCompanies(companies);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCompanies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <NavBar />
      <Welcome />
      <br />
      <CompanyCard />
      <JobCart />
      <Footer />
    </>
  );
}

export default App;