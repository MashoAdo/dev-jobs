import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import "../styles/JobsContainer.css";

import { isDarkContext } from "../App";
import getLogo from "../CustomHooks/getLogo";

function JobsContainer({ jobs }) {

	const isDark = useContext(isDarkContext);

	return (
		<div className="jobs-container">
			{jobs.map((jobItem, i) => {
				// finds logo matching company id from assets folder and returns it
				const Logo = getLogo(jobItem.id - 1);

				return (
					<Link to={`/job/${jobItem._id}`} key={i}>
						<div className={isDark ? "job-card job-card-dark" : "job-card"}>
							<div
								className="job-card-icon"
								style={{ backgroundColor: jobItem.logoBackground }}
							>
								<Logo />
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
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default JobsContainer;
