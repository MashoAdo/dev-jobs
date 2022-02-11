import React, { useState } from "react";

import "../styles/Search.css";

//icons svg
import { ReactComponent as FilterIcon } from "../assets/mobile/icon-filter.svg";
import { ReactComponent as SearchIcon } from "../assets/desktop/icon-search-white.svg";
import { ReactComponent as SearchIconTablet } from "../assets/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../assets/desktop/icon-location.svg";

function Search({ isDark, handleClick, handleChange }) {
	const [show, setShow] = useState(false);

	const toggleFilter = () => {
		setShow(!show);
	};

	const removeShow = () => {
		setShow(false);
	};

	const handleSearch = () => {
		handleClick();
		removeShow();
	};

	return (
		<div className="search-container">
			<div
				className={show ? "overlay active" : "overlay"}
				onClick={removeShow}
			></div>
			<div
				className={
					isDark
						? "search-wrapper search-wrapper-dark"
						: "search-wrapper search-wrapper-light"
				}
			>
				<input
					className={
						isDark ? "search-input input-dark" : "search-input input-light"
					}
					type="text"
					name="title"
					placeholder="Filter by title..."
					onChange={handleChange}
				/>

				<div>
					<FilterIcon className="filter-icon" onClick={toggleFilter} />
					<SearchIcon className="search-icon" onClick={handleClick} />
				</div>
			</div>

			<div
				className={
					!show ? "filter-container" : "filter-container show-container"
				}
			>
				<div
					className={
						isDark ? "filter-wrapper filter-wrapper-dark" : "filter-wrapper"
					}
				>
					<div
						className={
							isDark
								? "location-wrapper location-wrapper-dark"
								: "location-wrapper"
						}
					>
						<LocationIcon />
						<input
							className={
								isDark
									? "location-input input-dark"
									: "location-input input-light"
							}
							type="text"
							name="location"
							placeholder="Filter by location..."
							onChange={handleChange}
						/>
					</div>

					<div className="cotract-checkbox">
						<input
							className="checkbox"
							type="checkbox"
							name="contract"
							value="full time"
							onChange={handleChange}
						/>
						<label className="fulltime">Full Time Only</label>
					</div>

					<button className="search-button" onClick={handleSearch}>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

export default Search;
