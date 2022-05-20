import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import About from "./components/About";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Home />} index />
				<Route element={<About />} path="/about" />
				<Route element={<SinglePost path="/post/:slug" />} />
				<Route element={<Post />} path="/post" />
				<Route element={<Project />} path="/project" />
			</Routes>
		</Router>
	);
}

export default App;
