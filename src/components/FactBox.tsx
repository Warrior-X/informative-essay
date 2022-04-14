const FactBox = (props: { name: string; content: string }) => {
    return (
        <div className="flex flex-col justify-center content-center mx-auto absolute left-[18px] bg-gray-300 rounded-xl p-2 w-48">
            <h3>{props.name}</h3>
            <p>{props.content}</p>
        </div>
    );
};

export default FactBox;
