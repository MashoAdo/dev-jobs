import React, { useState } from "react";

import "./styles/App.css";
import Header from "./components/Header";
import JobsContainer from "./components/JobsContainer";
import LearnBtn from "./components/LearnBtn";
// import Search from "./components/Search";
import SearchTablet from "./components/SearchTablet";

export const isDarkContext = React.createContext();

function App() {
	const [isDark, setIsDark] = useState(false);

	const setMode = (e) => {
		setIsDark(!isDark);
	};

	return (
		<div className={isDark ? "app dark" : "app"}>
			<Header isDark={isDark} handleSetMode={setMode} />
			{/* <Search isDark={isDark} /> */}
			<SearchTablet />

			{/* <isDarkContext.Provider value={isDark}>
				<JobsContainer />
			</isDarkContext.Provider>
			<LearnBtn /> */}
		</div>
	);
}

export default App;
