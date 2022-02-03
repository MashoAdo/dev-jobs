import React, { useState } from "react";

import "./styles/App.css";
import Header from "./components/Header";

function App() {
	const [isDark, setIsDark] = useState(false);

	const setMode = (e) => {
		setIsDark(!isDark);
	};

	return (
		<div className="app">
			<Header isDark={isDark} handleSetMode={setMode} />
		</div>
	);
}

export default App;
