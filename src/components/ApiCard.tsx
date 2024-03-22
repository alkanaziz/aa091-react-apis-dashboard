const ApiCard = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex gap-5 flex-col bg-slate-200 p-6 w-[20rem] rounded">
            {children}
        </div>
    );
};
export default ApiCard;
