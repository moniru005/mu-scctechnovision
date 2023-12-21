// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";
// import image from '../../assets/images/abs-2.jpg'

const CallToAction = () => {
//   const axiosPublic = useAxiosPublic();

//   const handleForm = (e) =>{
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const phone = form.phone.value;
//     const city = form.city.value;

//     const user = {
//       name: name,
//       email: email,
//       phone: phone,
//       city: city
//     }

//     axiosPublic.post('/demo-request', user)
//     .then((res) => {
//       if (res.data.insertedId) {
//         form.reset();
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: `${name} Successfully Scheduled for Demo`,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     });
//   }

  return (
    <div className="mt-16 font-workSans">
      <div className={`relative mt-12 font-workSans bg-gradient-to-r from-[#0C1632] to-[#031555] h-[500px] lg:h-[350px] mx-auto flex justify-center `}>
        
        <div className="lg:top-12 flex flex-col lg:flex-row  items-center justify-evenly mx-auto gap-12 w-full">
            
          <div className="lg:w-2/6 lg:space-y-3 w-full text-center text-white">
            <h2 className=" text-lg lg:text-[36px]  font-semibold flex flex-col lg:gap-y-3 pb-3">
              <span>We&apos;d love to walk you</span> 
              <span>through the platform</span>
            </h2>
            <p className="w-96 text-sm">
              Fill in the form and we&apos;ll schedule a free demo
            </p>
          </div>

          {/* form */}
          <div className="lg:w-3/6 w-[90%] pb-4 lg:pb-0">
            <form className="flex flex-col space-y-3 w-full">
              <input 
              className="p-2 rounded border border-[#cecfcf]" 
              type="text" name="name" placeholder="Name" />

              <input 
              className="p-2 rounded border border-[#cecfcf]" 
              type="email" name="email" placeholder="Email" />

              <input 
              className="p-2 rounded border border-[#cecfcf]" 
              type="text" name="phone" placeholder="Phone" />

              <input 
              className="p-2 rounded border border-[#cecfcf]" 
              type="text" name="city" placeholder="City" />

              <input 
              className="p-2 bg-[#0063a5ac] hover:bg-[#0064A5] text-white rounded cursor-pointer" 
              type="submit" value="Submit" />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;