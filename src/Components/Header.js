import React from "react";

// styles
import "../styles/Header.css";

import { ReactComponent as Logo } from "../assets/desktop/logo.svg";
import { ReactComponent as Sun } from "../assets/desktop/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/desktop/icon-moon.svg";

function Header({ isDark, handleSetMode }) {
	return (
		<header>
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
							checked={isDark === false}
							onChange={handleSetMode}
						/>

						<input
							id="radio"
							type="radio"
							value="dark"
							name="mode"
							checked={isDark === true}
							onChange={handleSetMode}
						/>
					</div>
					<Moon />
				</div>
			</div>
		</header>
	);
}

export default Header;
