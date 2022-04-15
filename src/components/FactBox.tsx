const FactBox = (props: { name: string; content: string }) => {
    return (
        <div
            className={`flex flex-col justify-center content-center mx-auto absolute ${
                Math.random() > 0.5 ? "left-[18px]" : "right-[18px]"
            } bg-gray-300 dark:bg-gray-800 rounded-xl p-2 w-[14.285%] fact`}
        >
            <h3>{props.name}</h3>
            <hr className="border-black dark:border-white" />
            <p>{props.content}</p>
        </div>
    );
};

export default FactBox;
