import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { Outlet, Link } from "react-router-dom";
import "./Fakultas.css";

const Fakultas = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function getData() {
			setLoading(true);
			setError(false);
			try {
				const url = "http://localhost:3004/fakultas";
				const result = await axios.get(url);
				setData(result.data);
			} catch (err) {
				setError(true);
			}
			setLoading(false);
		}
		getData();
	}, []);
	return (
		<>
			<Navbar />
			{loading ? (
				<h1 className='loading'><span class="loader"></span></h1>
			) : (
				<div className="main-content-fakultas">
					<div className="container-fakultas">
						<h1 className="header-fakultas">List Fakultas</h1>
						<p className="header-text-fakultas">
							Simak fakultas yang sesuai dengan passion kalian
						</p>
					</div>
					<div className="fakultas-container">
						{data.map((item, index) => (
							<div key={index} className="fakultas-list">
								<h1 className="header-list">RightWay</h1>
								<div className="header-and-link">
									<h2 className="the-header">
										{item.fakultas_name}
									</h2>
									<Link to={item.to} className="the-link">
										Lihat Selengkapnya
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			<Footer />
			<Outlet />
		</>
	);
};

export default Fakultas;
