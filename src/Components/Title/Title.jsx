
const Title = ({heading,paragraph }) => {
    return (
        <div className="pb-12 pt-12">
            <h2 className="lg:text-4xl text-2xl font-semibold text-center text-[#031553] mb-6 px-2 lg:px-0">{heading}</h2>
            <p className="hidden lg:flex lg:text-lg text-base mx-auto justify-center text-justify lg:text-center w-[70%]">{paragraph}</p>
        </div>
    );
};

export default Title;