import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.css";
import Header from "./components/Header";
import JobsContainer from "./components/JobsContainer";
import LearnBtn from "./components/LearnBtn";
import Search from "./components/Search";
import SearchTablet from "./components/SearchTablet";
import JobApplication from "./components/JobApplication";

// import data from "./data.json";

export const isDarkContext = React.createContext();

function App() {
	// set mode to dark or light on change of radio buttons used on header component
	const [isDark, setIsDark] = useState(false);

	const setMode = () => {
		setIsDark(!isDark);
	};

	// stores search term ,store data to be mapped to UI
	const [searchTerm, setSearchTerm] = useState("");
	const [uiData, setUiData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState(false);

	const handleChange = (e) => {
		// get input value and convert to lowercase , necessary for comparison when filtering
		var search = e.target.value.toLowerCase();
		setSearchTerm(search);
	};

	// filters data using the search term and set the data to be mapped to UI
	const handleClick = () => {
		let filteredData;
		// if search term is empty show data that was fetched before
		if (!searchTerm) {
			filteredData = uiData;
		}

		filteredData = uiData.filter((item) => {
			return (
				// convert object values to lowercase for comparison with searchTerm
				item.company.toLowerCase().includes(searchTerm) ||
				item.contract.toLowerCase().includes(searchTerm) ||
				item.location.toLowerCase().includes(searchTerm) ||
				item.position.toLowerCase().includes(searchTerm)
			);
		});

		setUiData(filteredData);
	};

	console.log(uiData);

	// fetch Jobs from our API endpoint
	const fetchJobs = async () => {
		try {
			const response = await fetch("http://localhost:3501/jobs");
			const jobs = await response.json();

			setUiData(jobs);
		} catch (error) {
			console.log(error);
			setErr(true);
		} finally {
			setLoading(false);
		}
	};

	// fetch Jobs from our API endpoint
	useEffect(() => {
		fetchJobs();
	}, []);

	// if error occurs when rendering UI display this error message
	err && <h1>An Error Occured Please Refresh...</h1>;

	return (
		<Router>
			<div className={isDark ? "app dark" : "app"}>
				<Header isDark={isDark} handleSetMode={setMode} />

				{loading ? (<h1>Loading...</h1>) :
				 (
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Search isDark={isDark} />
									<SearchTablet
										isDark={isDark}
										handleChange={handleChange}
										handleClick={handleClick}
									/>
									<isDarkContext.Provider value={isDark}>
										<JobsContainer jobs={uiData} />
									</isDarkContext.Provider>
									<LearnBtn />
								</>
							}
						></Route>

						<Route path="/job/:id" element={<JobApplication />}></Route>
					</Routes>
				)}
			</div>
		</Router>
	);
}

export default App;
