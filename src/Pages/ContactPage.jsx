import { Helmet } from "react-helmet-async";
import Title from "../Components/Title/Title";

const ContactPage = () => {
    const handleBtn = (e) =>{
        e.preventDefault();
    }
  return (
    <div className="py-16 bg-[url('./assets/images/abs-3.png')] bg-fixed bg-cover ">
      <Helmet><title>Contact us</title></Helmet>
      <Title heading={"Contact Us"}></Title>

      <div className="max-w-5xl px-4 lg:px-0  flex mx-auto pt-12 ">
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-y-10 justify-center w-full ">
          {/* left */}
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-3xl lg:text-2xl font-bold lg:font-medium text-black ">
              Lets Get in Touch
            </h1>
            <div className="text-justify pt-12">
              <p className="text-xl lg:text-2xl ">
                I enjoy discussing new projects and design challenges. Please
                share as much info, as possible so we can get the most out of
                our first catch-up.
              </p>
              <h4 className="text-2xl font-medium pt-4">Living In:</h4>
              <p className="text-xl pt-1">1255 Maijdee Court, Noakhali, BD</p>
              <h4 className="text-2xl font-medium pt-4">Call:</h4>
              <p className="text-xl pt-1">(+880) 1683988686</p>
            </div>
          </div>

          {/* right */}
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-3xl lg:text-2xl font-bold lg:font-medium text-black ">
              Estimate your Project?
            </h1>
            <div className="text-justify pt-12">
              <form onClick={handleBtn} className="space-y-6">
                <div className="flex flex-col ">
                  <label className="pb-3 font-medium" htmlFor="name">
                    What is Your Name?
                  </label>
                  <input
                    className="border-b-2 outline-none px-2 py-1 border-black bg-transparent"
                    type="text"
                    name="name"
                    id=""
                  />
                </div>
                <div className="flex flex-col">
                  <label className="pb-3 font-medium" htmlFor="name">
                    Your Email Address:
                  </label>
                  <input
                    className="border-b-2 outline-none px-2 py-1 border-black bg-transparent"
                    type="text"
                    name="name"
                    id=""
                  />
                </div>
                <div className="flex flex-col">
                  <label className="pb-3 font-medium" htmlFor="name">
                    How Can I Help you?
                  </label>
                  <textarea
                    className="border-b-2 outline-none px-2 py-1 border-black bg-transparent"
                    rows="3"
                    name="name"
                    id=""
                  />
                </div>
                <button className="btn rounded px-10 bg-[#302F2F] text-white hover:text-black">
                  <input type="submit" value="Send" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
