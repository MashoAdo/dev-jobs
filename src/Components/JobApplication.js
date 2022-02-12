import React from "react";

import "../styles/jobApplication.css";

function JobApplication({ isDark }) {
	return (
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
					className={isDark ? "company-info company-info-dark" : "company-info"}
				>
					<h2>Scoot</h2>
					<a
						className="company-link"
						href="https://example.com"
						target="_blank"
						rel="noreferrer"
					>
						scoot.com
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

			<main className={isDark && "main-dark"}>
				<div className="job-info-apply">
					<div>
						<div className="time-contract">
							<span className="time-posted">1 w ago</span>
							<span className="job-info-apply-contract">&#8226; Part Time</span>
						</div>

						<h2
							className={
								isDark
									? "job-info-title job-info-title-dark "
									: "job-info-title"
							}
						>
							Senior Software Engineer
						</h2>
						<span className="country-info">United Kingdom</span>
					</div>

					<a
						className="job-info-apply-button"
						href="https://example.com"
						target="_blank"
						rel="noreferrer"
					>
						Apply Now
					</a>
				</div>

				<div className="description">
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
						hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
						aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
						sollicitudin laoreet viverra, tortor libero sodales leo, eget
						blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
						potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
						est, vitae luctus metus libero eu augue. Morbi purus libero,
						faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
						Praesent elementum hendrerit tortor. Sed semper lorem at felis.
						Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
						dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
						dapibus eu, fermentum et, dapibus sed, urna.
					</p>
				</div>

				<div
					className={isDark ? "requirements requirements-dark" : "requirements"}
				>
					<h2>Requirements</h2>
					<p>
						Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
						a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
						libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
						varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
						Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
						gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
						lacinia eu, vulputate vel, nisl.
					</p>
					<ul>
						<li>Morbi interdum mollis sapien. Sed</li>
						<li>
							Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
							pulvinar risus
						</li>
						<li>
							Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
							tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
						</li>
						<li>Morbi interdum mollis sapien. Sed</li>
					</ul>
				</div>

				<div className={isDark ? "duties duties-dark" : "duties"}>
					<h2>What You Will Do</h2>
					<p>
						Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
						a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
						libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
						varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
						Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
						gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
						lacinia eu, vulputate vel, nisl.
					</p>
					<ol className="duties-ordered-list">
						<li>Morbi interdum mollis sapien. Sed</li>
						<li>
							Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
							pulvinar risus
						</li>
						<li>
							Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
							tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
						</li>
						<li>Morbi interdum mollis sapien. Sed</li>
					</ol>
				</div>
			</main>

			<div className={isDark ? "footer footer-dark" : "footer"}>
				<div
					className={isDark ? "footer-title footer-title-dark" : "footer-title"}
				>
					<h2>Senior Software Engineer</h2>
					<span>So Digital Inc.</span>
				</div>

				<a
					className="footer-button"
					href="https://example.com"
					target="_blank"
					rel="noreferrer"
				>
					Apply Now
				</a>
			</div>
		</div>
	);
}

export default JobApplication;
