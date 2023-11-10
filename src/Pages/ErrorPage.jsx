import error from '../assets/404.gif'
const ErrorPage = () => {
    return (
        <div className='max-w-screen-2xl mx-auto flex justify-center items-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;