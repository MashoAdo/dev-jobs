import React from "react";
import "../styles/SearchTablet.css";

//icons svg
import { ReactComponent as SearchIconTablet } from "../assets/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../assets/desktop/icon-location.svg";

function Search({ isDark, handleClick, handleChange }) {
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
				<SearchIconTablet onClick={handleClick} />
				<input
					className={isDark ? "input input-dark" : "input"}
					type="text"
					name="title"
					placeholder="Filter by title, companies, expertise..."
					onChange={handleChange}
				/>
			</div>

			<div
				className={
					isDark ? "location-tablet location-tablet-dark" : "location-tablet"
				}
			>
				<LocationIcon onClick={handleClick} />
				<input
					className={isDark ? "input input-dark" : "input"}
					type="text"
					name="title"
					placeholder="Filter by Location..."
					onChange={handleChange}
				/>
			</div>

			<div
				className={
					isDark
						? "checkbox-search-btn checkbox-search-btn-dark"
						: "checkbox-search-btn"
				}
			>
				<input
					type="checkbox"
					name="contract"
					onChange={handleChange}
					value="full time"
				/>
				<label className="full-time-label">
					Full time <span className="only">Only</span>
				</label>

				<button className="search-btn" onClick={handleClick}>
					Search
				</button>
			</div>
		</div>
	);
}

export default Search;
