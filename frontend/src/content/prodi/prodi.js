import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { Link, useParams } from "react-router-dom";
import "./prodi.css";

const Prodi = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { name } = useParams();

	useEffect(() => {
		async function getData() {
			setLoading(true);
			setError(false);
			try {
				const url = "http://localhost:3004/" + name;
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
				<h1 className="loading">
					<span class="loader"></span>
				</h1>
			) : (
				<div className="main-content-prodi">
					<div className="container-prodi">
						<h1 className="header-prodi">List Program Studi</h1>
						<p className="header-text-prodi">
							Simak program studi yang sesuai dengan passion
							kalian
						</p>
					</div>
					<div className="prodi-container">
						{data.map((item, index) => (
							<div key={index} className="prodi-list">
								<h1 className="header-list">RightWay</h1>
								<div className="header-and-link">
									<h2 className="the-header">
										{item.prodi_name}
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
		</>
	);
};

export default Prodi;
