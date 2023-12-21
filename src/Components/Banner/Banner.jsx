import image1 from '../../assets/images/wepik.png'
import banner from '../../assets/images/banner.jpg'
const Banner = () => {
    return (
      <div>
        <div className="relative">
          <img src={banner} alt="" />
          <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div>
  
          <div className="absolute top-5 ml-6 lg:top-[120px]  lg:ml-12 font-semibold">
            <h3 className="text-xs lg:text-3xl text-white my-1 lg:my-3">Welcome</h3>
            <h1 className="text-base  lg:text-5xl text-white">
              <p>SCC Technovision Inc.</p>
              <p  className="lg:py-2">Build a Task Management</p>
              <p>With a caring perspective...</p>
            </h1>
            <button className='btn btn-xs lg:btn-md mt-2 lg:mt-6 text-xs lg:text-base'>Let&apos;s Explore </button>
          </div>
          <div className='absolute bottom-0 w-[200px] lg:w-[600px] right-0'>
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;