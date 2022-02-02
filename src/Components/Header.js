import React, { useState } from "react";

// styles
import "../styles/Header.css";

import { ReactComponent as Logo } from "../assets/desktop/logo.svg";
import { ReactComponent as Sun } from "../assets/desktop/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/desktop/icon-moon.svg";

function Header() {
	const [value, setValue] = useState("light");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	console.log(value);
	return (
		<div className="header">
			<Logo />

			<div className="mode">
				<Sun />
				<div className="radios">
					<input
						id="radio"
						type="radio"
						value="light"
						name="mode"
						checked={value === "light"}
						onChange={handleChange}
					/>

					<input
						id="radio"
						type="radio"
						value="dark"
						name="mode"
						checked={value === "dark"}
						onChange={handleChange}
					/>
				</div>
				<Moon />
			</div>
		</div>
	);
}

export default Header;
