const ApiCard = ({children, cardWidth = '20rem'}: {children: React.ReactNode, cardWidth?: string}) => {
    return (
        <div className="flex gap-5 flex-col bg-slate-200 p-6 w-96 rounded" style={{width: cardWidth}}>
            {children}
        </div>
    );
};
export default ApiCard;
