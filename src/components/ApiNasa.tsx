import axios from "axios";
import { useState } from "react";
import ApiCard from "./ApiCard";
import { NasaData, initialNasaData } from "../type";


const ApiNasa = () => {
	const [date, setDate] = useState("2024-02-01");
	const [nasaData, setNasaData] = useState<NasaData>(initialNasaData);
	
	const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
	const url = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${date}`;

	const handleGetPhoto = (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		(async () => {
			const response = await axios.get(url);
			const _nasaData = response.data;
			console.log(response);
			setNasaData(_nasaData)
		})();
	};

	return (
		<form>
			<ApiCard cardWidth="30rem">
				<input value={date} onChange={(e) => setDate(e.target.value)} />
				<button onClick={(e) => handleGetPhoto(e)}>Get photo of the day</button>
				<p>Photo and explanation of the day {nasaData.date} </p>
				<img src={nasaData.url} alt="" />
				<p>{nasaData.title}</p>
				<p>{nasaData.explanation}</p>
			</ApiCard>
		</form>
	);
};
export default ApiNasa;
