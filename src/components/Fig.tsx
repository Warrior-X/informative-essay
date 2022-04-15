const Fig = (props: { src: string; caption?: string }) => {
    return (
        <div className="flex flex-col justify-center content-center my-4 mx-auto w-fit text-center">
            <img src={props.src} className="w-[240px] mx-auto" alt="" />
            <p className="cite mx-auto text-xs text-gray-700 dark:text-gray-300">
                {props.caption ?? `Source: ${props.src}`}
            </p>
        </div>
    );
};

export default Fig;
