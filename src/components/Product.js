import React, {useEffect, useState} from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";


const Product = (props) => {
	const [productData, setProductData]=useState(null)
	useEffect(()=>{
		sanityClient.fetch(`*[_type == "product"]{
			title,
			
		
			description,
			
			price,
            slug
			
		}`).then((data)=>setProductData(data))
		.catch(console.error);
	}, [])
	return(
		<main className="bg-green-100 min-h-screen p-12">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center cursive">
				</h1>
				<h2 className="text-lg text-gray-600 flex justify-center mb-12"></h2>
				<section className="grid grid-cols-2 gap-8">
				{
					productData && productData.map((product, index)=>(

					
				
					<article className="relative rounded-lg shadow-xl bg-white p-16">
						<h3 className="text-gray-800 text-3cl font-bold mb-2 hover:text-red-700">
							<a
							 href={product.slug.current}
							 alt={product.title}
							 rel="noopener noreferrer"
							 >{product.title}</a>
						</h3>
						<div className="text-gray-500 text-xs space-x-4">
							<span>
								<strong className="font-bold">Finished on</strong>:{" "}
								{new Date(product.date).toLocaleDateString()}
							</span>
							<span>
								<strong className="font-bold">Company</strong>: {product.place}
							</span>
							
							<p className="my-6 text-lg text-gray-700 leading-relaxed">
								{product.description}
							</p>
                            <Link to={"/product/" + product.slug.current} key={product.slug.current}>
							<a href={product.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
								View the product {" "}
							<span role="img" aria-label="right pointer">👉</span>
							</a>
                            </Link>
						</div>
					</article>
					))}
				</section>
			</section>
		</main>
	);
};

export default Product;
