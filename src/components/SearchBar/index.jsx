import React, { useState } from "react";

function SearchBar({ fetchJobsCustom }) {
  const [jobCriteria, setJobsCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  const handelChange = (e) => {
    setJobsCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(jobCriteria);

  const search = async () => {
    await fetchJobsCustom(jobCriteria);
  };

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <select
        onChange={handelChange}
        name="title"
        value={jobCriteria.title}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Project Manager">Project Manager</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
        <option value="QA Tester">QA Tester</option>
        <option value="Software Architect">Software Architect</option>
      </select>

      <select
        onChange={handelChange}
        name="type"
        value={jobCriteria.type}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
        <option value="Freelance">Freelance</option>
      </select>

      <select
        onChange={handelChange}
        name="location"
        value={jobCriteria.location}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
        <option value="On-Site">On-Site</option>
        <option value="Work From Anywhere">Work From Anywhere</option>
      </select>

      <select
        onChange={handelChange}
        name="experience"
        value={jobCriteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
        <option value="Lead">Lead</option>
        <option value="10+ Years Experience">10+ Years Experience</option>
      </select>

      <button
        onClick={search}
        className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
