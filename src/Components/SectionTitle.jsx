

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <div className='text-center w-2/3 md:w-4/12 lg:w-3/12 mx-auto my-8'>
                <h1 className='font-bold text-[#D99904] mb-2'>---{heading}---</h1>
                <p className='text-black uppercase font-semibold md:text-2xl lg:text-4xl border-y-2 py-2'>{subHeading}</p>
            </div>
        </div>
    );
};

export default SectionTitle;