import React, { useState, useEffect } from "react";

import "./styles/App.css";
import Header from "./components/Header";
import JobsContainer from "./components/JobsContainer";
import LearnBtn from "./components/LearnBtn";
import Search from "./components/Search";
import SearchTablet from "./components/SearchTablet";

import data from "./data.json";

export const isDarkContext = React.createContext();

function App() {
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
		// get input value and convert to lowercase , necessary to comparison when filtering
		var search = e.target.value.toLowerCase();
		setSearchTerm(search);
		console.log("handleChange func triggered");
	};

	// filters data using the search term and set the data to be mapped to UI
	const handleClick = () => {
		if (searchTerm === "") {
			setUiData(data);
		}
		console.log(searchTerm);
		const filteredData = data.filter((item) => {
			return (
				// convert object values to lowercase for comparison with searchTerm
				item.company.toLowerCase().includes(searchTerm) ||
				item.contract.toLowerCase().includes(searchTerm) ||
				item.location.toLowerCase().includes(searchTerm) ||
				item.position.toLowerCase().includes(searchTerm)
			);
		});

		setUiData(filteredData);
		console.log("handleClick func triggered");
	};

	// fetch Jobs from our API endpoint
	useEffect(() => {
		fetch("http://localhost:3501/jobs")
			.then((response) => {
				return response.json();
			})
			.then((jobs) => {
				setUiData(jobs);
				console.log(uiData);
			})

			.catch((err) => {
				console.log(`${err} : ${err.message}`);
				setErr(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	// console.log(uiData);
	console.log(loading);
	console.log(uiData);

	return (
		<div className={isDark ? "app dark" : "app"}>
			<Header isDark={isDark} handleSetMode={setMode} />
			<Search isDark={isDark} />
			<SearchTablet
				isDark={isDark}
				handleChange={handleChange}
				handleClick={handleClick}
			/>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<isDarkContext.Provider value={isDark}>
						<JobsContainer jobs={uiData} />
					</isDarkContext.Provider>
					<LearnBtn />
				</>
			)}
		</div>
	);
}

export default App;
