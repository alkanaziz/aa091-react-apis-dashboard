import { useState } from "react";
import axios from "axios";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ApiDictionary = () => {
	const [word, setWord] = useState("");
	const [definition, setDefinition] = useState("");

	const handleGetDefinition = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		(async () => {
			const response = await axios.get(`${url}/${word}`);
			const data = response.data;
			const _definition = data[0].meanings[0].definitions[0].definition;
			setDefinition(_definition);
		})();
	};

	return (
		<form>
			<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
				<input value={word} onChange={(e) => setWord(e.target.value)} />
				<button onClick={(e) => handleGetDefinition(e)}>
					Get Definition
				</button>
				<p>Definition: </p>
				<p>{definition}</p>
			</div>
		</form>
	);
};
export default ApiDictionary;
