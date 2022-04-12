const Fig = (props: { src: string; caption?: string }) => {
    return (
        <div className="flex flex-col justify-center content-center mx-auto w-fit">
            <img src={props.src} alt="" />
            <p className="text-xs text-gray-700 dark:text-gray-300">
                {props.caption ?? `Source: ${props.src}`}
            </p>
        </div>
    );
};

export default Fig;
