const Fig = (props: { src: string; caption?: string }) => {
    return (
        <div className="flex flex-col justify-center content-center my-4 mx-auto w-fit text-center">
            <img src={props.src} className="mx-auto w-[240px]" alt="" />
            <p className="mx-auto text-xs text-gray-700 dark:text-gray-300 cite">
                {props.caption ?? `Source: ${props.src}`}
            </p>
        </div>
    );
};

export default Fig;
