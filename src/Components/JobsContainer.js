import React, { useContext } from "react";

// styles
import "../styles/JobsContainer.css";
import { isDarkContext } from "../App";

// import JobCard from "./JobCard";
import { ReactComponent as Scoot } from "../assets/logos/scoot.svg";
import { ReactComponent as Blogr } from "../assets/logos/blogr.svg";
import { ReactComponent as Coffeeroasters } from "../assets/logos/coffeeroasters.svg";
import { ReactComponent as Creative } from "../assets/logos/creative.svg";
import { ReactComponent as Crowdfund } from "../assets/logos/crowdfund.svg";
import { ReactComponent as Maker } from "../assets/logos/maker.svg";
import { ReactComponent as Mastercraft } from "../assets/logos/mastercraft.svg";
import { ReactComponent as Officelite } from "../assets/logos/officelite.svg";
import { ReactComponent as Pod } from "../assets/logos/pod.svg";
import { ReactComponent as Pomodoro } from "../assets/logos/pomodoro.svg";
import { ReactComponent as Typemaster } from "../assets/logos/typemaster.svg";
import { ReactComponent as Vector } from "../assets/logos/vector.svg";

function JobsContainer({ jobs }) {
	const logos = [
		Scoot,
		Blogr,
		Vector,
		Officelite,
		Pod,
		Creative,
		Pomodoro,
		Maker,
		Coffeeroasters,
		Mastercraft,
		Crowdfund,
		Typemaster,
		Crowdfund,
		Coffeeroasters,
		Blogr,
	];
	const isDark = useContext(isDarkContext);
	console.log(jobs);
	return (
		<div className="jobs-container">
			{jobs.map((jobItem, i) => {
				// get each logo
				const UniqueLogo = logos[jobItem.id - 1];

				return (
					<article
						className={isDark ? "job-card job-card-dark" : "job-card"}
						key={i}
					>
						<div
							className="job-card-icon"
							style={{ backgroundColor: jobItem.logoBackground }}
						>
							{/* <UniqueLogo /> */}
						</div>

						<div>
							<div className="time-contract">
								<small>{jobItem.postedAt}</small>
								<small className="contract">&#8226; {jobItem.contract}</small>
							</div>
							<div className="job-title-wrapper">
								<span className="job-title">{jobItem.position}</span>
							</div>
							<small className="company-name">{jobItem.company}</small> <br />
							<div className="country"> {jobItem.location} </div>
						</div>
					</article>
				);
			})}
		</div>
	);
}

export default JobsContainer;
