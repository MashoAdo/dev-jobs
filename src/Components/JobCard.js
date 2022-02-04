import React from "react";

// styles
import "../styles/JobsContainer.css";
// data
import data from "../data.json";

// icons
import { ReactComponent as Scoot } from "../assets/logos/scoot.svg";

function JobCard() {
	const jobOne = data[0];

	return (
		<article className="job-card">
			<div
				className="job-card-icon"
				style={{ backgroundColor: jobOne.logoBackground }}
			>
				<Scoot />
			</div>

			<div>
				<div className="time-contract">
					<small>5h ago</small>
					<small className="contract">&#8226; Full Time</small>
				</div>
				<div className="job-title-wrapper">
					<span className="job-title">Senior Software Engineer</span>
				</div>
				<small className="company-name">Scoot</small> <br />
				<div className="country">United Kingdom</div>
			</div>
		</article>
	);
}

export default JobCard;