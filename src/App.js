import React, { useState } from "react";

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

	const setMode = (e) => {
		setIsDark(!isDark);
	};

	// stores search term
	const [searchTerm, setSearchTerm] = useState("");
	const [uiData, setUiData] = useState(data);

	const handleChange = (e) => {
		// get input value and convert to lowercase , necessary to comparison when filtering
		var search = e.target.value.toLowerCase();
		setSearchTerm(search);
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
	};

	return (
		<div className={isDark ? "app dark" : "app"}>
			<Header isDark={isDark} handleSetMode={setMode} />
			<Search isDark={isDark} />
			<SearchTablet
				isDark={isDark}
				handleChange={handleChange}
				handleClick={handleClick}
			/>
			<isDarkContext.Provider value={isDark}>
				<JobsContainer data={uiData} />
			</isDarkContext.Provider>
			<LearnBtn />
		</div>
	);
}

export default App;
