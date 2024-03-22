import { useState } from "react";

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const ApiDictionary = () => {
	const [word, setWord] = useState("");

    const handleGetDefinition = () => {
        alert("clicked")
    }
	return (
		<div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
			<input value={word} onChange={(e) => setWord(e.target.value)} type="text" />
			<button onClick={handleGetDefinition}>Get Definition</button>
			<p>Definition: </p>
		</div>
	);
};
export default ApiDictionary;
