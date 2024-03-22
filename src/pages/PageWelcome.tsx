import ApiDictionary from "../components/ApiDictionary";
import ApiNasa from "../components/ApiNasa";

export const PageWelcome = () => {
	return (
		<div className="flex gap-3 flex-wrap">
			<ApiDictionary />
			<ApiNasa />
		</div>
	);
};
