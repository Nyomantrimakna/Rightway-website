import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./create.css";

const Create = () => {
	// let history = useHistory();
	const [fakultasname, setFakultasname] = useState("");
	const [direction, setDirection] = useState("");

	console.log(fakultasname);
	console.log(direction);

	const sendData = () => {
		axios
			.post("http://localhost:3004/fakultas", {
				fakultas_name: fakultasname,
				to: direction,
			})
			.then(() => {
				console.log("berhasil menambahkan data");
			});
	};

	return (
		<div className="container-create">
			<div className="header-create">
				<h1>Form Menambahkan Program Studi</h1>
				<p>Silahkan tambahkan program studi baru</p>
			</div>
			<div className="form-box">
				<label htmlFor="fakultasname">Fakultas Name : </label>
				<input
					type="text"
					name="fname"
					onChange={(e) => setFakultasname(e.target.value)}
					placeholder="Fakultas Name"
				/>
			</div>
			<div className="form-box">
				<label htmlFor="direction">Direction To : </label>
				<input
					type="text"
					name="fdirect"
					onChange={(e) => setDirection(e.target.value)}
					placeholder="Direction"
				/>
			</div>
			<Link to="/fakultas">
				<button type="submit" onClick={sendData} className="btn-create">
					Submit
				</button>
			</Link>
		</div>
	);
};

export default Create;
