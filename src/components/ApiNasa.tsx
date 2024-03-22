import axios from "axios";
import { useState } from "react";
import ApiCard from "./ApiCard";


const ApiNasa = () => {
	const [date, setDate] = useState("");
	const [data, setData] = useState<{ url: string, title: string, explanation: string }>({});
	
	const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
	const url = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${date}`;

	const handleGetPhoto = (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		(async () => {
			const response = await axios.get(url);
			const _data = response.data;
			console.log(response);
			setData(_data)
		})();
	};

	return (
		<form>
			<ApiCard cardWidth="30rem">
				<input value={date} onChange={(e) => setDate(e.target.value)} />
				<button onClick={(e) => handleGetPhoto(e)}>Get photo of the day</button>
				<p>Photo and explanation of the day</p>
				<img src={data.url} alt="" />
				<p>{data.title}</p>
				<p>{data.explanation}</p>
			</ApiCard>
		</form>
	);
};
export default ApiNasa;
