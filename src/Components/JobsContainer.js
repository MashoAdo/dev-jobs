import React from "react";

// styles
import "../styles/JobsContainer.css";
// data
import data from "../data.json";

// icons
import { ReactComponent as Scoot } from "../assets/logos/scoot.svg";
import JobCard from "./JobCard";

function JobsContainer() {
	console.log(data);

	const jobOne = data[0];
	return (
		<div className="jobs-container">
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
			<JobCard />
		</div>
	);
}

export default JobsContainer;
