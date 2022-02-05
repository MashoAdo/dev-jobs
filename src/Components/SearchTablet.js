import React, { useState } from "react";

import "../styles/SearchTablet.css";

//icons svg
import { ReactComponent as SearchIconTablet } from "../assets/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../assets/desktop/icon-location.svg";

function Search({ isDark }) {
	return (
		<div
			className={
				isDark
					? "search-tablet-container search-tablet-container-dark "
					: "search-tablet-container"
			}
		>
			<div
				className={
					isDark ? "search-tablet search-tablet-dark" : "search-tablet"
				}
			>
				<SearchIconTablet />
				<input
					className={isDark ? "input input-dark" : "input"}
					type="text"
					name="title"
					placeholder="Filter by title, companies, expertise..."
				/>
			</div>

			<div
				className={
					isDark ? "location-tablet location-tablet-dark" : "location-tablet"
				}
			>
				<LocationIcon />
				<input
					className={isDark ? "input input-dark" : "input"}
					type="text"
					name="title"
					placeholder="Filter by Location..."
				/>
			</div>

			<div
				className={
					isDark
						? "checkbox-search-btn checkbox-search-btn-dark"
						: "checkbox-search-btn"
				}
			>
				<input type="checkbox" name="contract" />
				<label className="full-time-label">
					Full time <span className="only">Only</span>
				</label>

				<button className="search-btn">Search</button>
			</div>
		</div>
	);
}

export default Search;
