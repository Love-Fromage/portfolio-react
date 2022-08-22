import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={About} path='/about'  />
				<Route component={SinglePost} path='/post/:slug'  />
				<Route component={SingleProduct} path='/product/:slug'  />
				<Route component={Post} path='/post'  />
				<Route component={Product} path='/product'  />
			</Switch>
			{/* <Routes>
				<Route element={<Home />} index />
				<Route element={<About />} path="/about" />
				<Route element={<SinglePost path="/post/:slug" />} />
				<Route element={<Post />} path="/post" />
				<Route element={<Project />} path="/project" />
			</Routes> */}
		</Router>
	);
}

export default App;
