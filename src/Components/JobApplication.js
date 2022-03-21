import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/jobApplication.css";

function JobApplication({ isDark }) {
	const [uiJob, setUIJob] = useState({});
	const [loading, setLoading] = useState(true);

	let { id } = useParams();

	//fetch a single job using id parameter
	const fetchIndividualJob = async () => {
		try {
			const response = await fetch(`http://localhost:3501/job/${id}`);
			const job = await response.json();

			setUIJob(job);
		} catch (error) {
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	// fetch function is carried after components has mounted, id is used as a dependance value in order to refecth a different job based on the id
	useEffect(() => {
		fetchIndividualJob();
	}, [id]);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className="job-application-card">
					<header
						className={
							isDark
								? "job-application-header job-application-header-dark"
								: "job-application-header"
						}
					>
						<div className="icon"></div>

						<div
							className={
								isDark ? "company-info company-info-dark" : "company-info"
							}
						>
							<h2>{uiJob.company}</h2>
							<a
								className="company-link"
								href="https://example.com"
								target="_blank"
								rel="noreferrer"
							>
								{uiJob.company}.com
							</a>
						</div>

						<a
							className={
								isDark
									? "company-link-btn company-link-btn-dark"
									: "company-link-btn"
							}
							href="https://example.com"
							target="_blank"
							rel="noreferrer"
						>
							Company Site
						</a>
					</header>

					<main className={isDark ? "main-dark" : undefined}>
						<div className="job-info-apply">
							<div>
								<div className="time-contract">
									<span className="time-posted">{uiJob.postedAt}</span>
									<span className="job-info-apply-contract">
										&#8226; {uiJob.contract}
									</span>
								</div>

								<h2
									className={
										isDark
											? "job-info-title job-info-title-dark "
											: "job-info-title"
									}
								>
									{uiJob.position}
								</h2>
								<span className="country-info">{uiJob.location}</span>
							</div>

							<a
								className="job-info-apply-button"
								href={uiJob.apply}
								target="_blank"
								rel="noreferrer"
							>
								Apply Now
							</a>
						</div>

						<div className="description">
							<p>{uiJob.description}</p>
						</div>

						<div
							className={
								isDark ? "requirements requirements-dark" : "requirements"
							}
						>
							<h2>Requirements</h2>
							<p>{uiJob.requirements.content}</p>
							<ul>
								{uiJob.requirements.items.map((item, i) => {
									return <li key={i}>{item}</li>;
								})}
							</ul>
						</div>

						<div className={isDark ? "duties duties-dark" : "duties"}>
							<h2>What You Will Do</h2>
							<p>{uiJob.role.content}</p>
							<ol className="duties-ordered-list">
								{uiJob.role.items.map((item, i) => {
									return <li key={i}>{item}</li>;
								})}
							</ol>
						</div>
					</main>

					<div className={isDark ? "footer footer-dark" : "footer"}>
						<div
							className={
								isDark ? "footer-title footer-title-dark" : "footer-title"
							}
						>
							<h2>{uiJob.position}</h2>
							<span>{uiJob.company}</span>
						</div>

						<a
							className="footer-button"
							href={uiJob.apply}
							target="_blank"
							rel="noreferrer"
						>
							Apply Now
						</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default JobApplication;
