import chefService from '../../src/assets/home/chef-service.jpg'
const About = () => {
    return (
        <div className='my-20 relative'>
            {/* <img src={chefService} alt="" />
            <div className='absolute max-w-2xl  xl:p-8 mx-auto top-10 xl:top-40 xl:left-96 bg-white text-black'>
                <h1 className="text-center xl:text-4xl font-bold mt-8"></h1>
                <p className="text-center xl:text-lg mt-4"></p>
                    
            </div> */}
            <div className="hero min-h-[40vh]" style={{backgroundImage: `url(${chefService})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md p-2 lg:p-4 bg-white text-black">
      <h1 className="mb-5 text-xl lg:text-5xl font-bold">Our Restaurant</h1>
      <p className="mb-5">Our restaurant, a culinary haven, offers a diverse menu crafted with passion and precision.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;