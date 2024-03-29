import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
	return (
		<header className="bg-red-600">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						// activeClassName="text-white"
						className={({ isActive }) =>
							isActive
								? "inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-green-800 text-4xl font-bold cursive tracking-widest"
								: "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
						}
					>
						Mathieu
					</NavLink>
					<NavLink
						to="/post"
						// activeClassName="text-red-100 bg-red-700"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
					>
						Blog Posts
					</NavLink>
					<NavLink
						to="/product"
						// activeClassName="text-red-100 bg-red-700"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
					>
						Products
					</NavLink>
					<NavLink
						to="/about"
						// activeClassName="text-red-100 bg-red-700"
						className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
					>
						About Me
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
