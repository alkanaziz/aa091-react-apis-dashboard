import { useState } from "react";
import axios from "axios";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ApiDictionary = () => {
	const [word, setWord] = useState("");

	const handleGetDefinition = (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
        
        (async () => {
            const response = await axios.get(`${url}/house`)
            const data = response.data;
            console.log(data);
        })();
    };

	return (
		<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
			<form>
				<input
					value={word}
					onChange={(e) => setWord(e.target.value)}
				/>
				<button onClick={(e) => handleGetDefinition(e)}>Get Definition</button>
				<p>Definition: </p>
			</form>
		</div>
	);
};
export default ApiDictionary;
