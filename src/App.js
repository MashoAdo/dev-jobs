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

	return (
		<div className={isDark ? "app dark" : "app"}>
			<Header isDark={isDark} handleSetMode={setMode} />
			<Search isDark={isDark} />
			<SearchTablet isDark={isDark} />

			<isDarkContext.Provider value={isDark}>
				<JobsContainer data={data} />
			</isDarkContext.Provider>
			<LearnBtn />
		</div>
	);
}

export default App;
