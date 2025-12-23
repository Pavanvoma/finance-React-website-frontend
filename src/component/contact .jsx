import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Image />
      <Ourservices />
      <ConnectorForm /> {/* ✅ FORM ATTACHED HERE */}
      <Footer/>
    </div>
  );
};

export default Contact;

/* ---------- IMAGE SECTION ---------- */
function Image() {
  return (
    <div>
      <img
        src="https://www.monaco.edu/wp-content/uploads/sites/4/2023/09/bannerfinanceexecutiveprograms.jpg"
        className="w-full h-96 mt-20 object-cover"
        alt="banner"
      />
    </div>
  );
}

/* ---------- OUR SERVICES ---------- */
function Ourservices(){ 
    return( 
    <> <div className='grid grid-cols-2 justify-center ml-24 mr-24 gap-16 '>
         <div className=''> 
            <h1 className='mt-20  mb-12 font-bold text-3xl text-pink-600'>Connect With Us</h1>
             <p className='mb-4 text-gray-700 opacity-80'>Partner with Chakra Finance to explore a wide range of financial solutions tailored to your needs. Our expert team is here to guide you through personalized plans, ensuring hassle-free financial services. Reach out today and take the first step toward achieving your financial goals with confidence.</p> 
             <p className='mb-4'> 📞 91+7989561133 <span className=' text-pink-600'> ⬅----- clickhere </span> </p> 
             <hr className="mt-3 mb-4 w-96 border-t-2 border-cyan-600 " /> 
             <p> ✉️finance@gmail.com <span className=' text-pink-600'> ⬅----- clickhere </span> </p> 
             <hr className="mt-3 mb-4 w-96 border-t-2 border-cyan-600 " />
              </div> 
              <div> 
                <h1 className='text-3xl text-pink-600 font-bold  text-center mt-20'>We do all over india</h1> 
                <iframe src="https://www.google.com/maps?q=India&z=4&output=embed"
                        width="100%" 
                        height="250" 
                        className="rounded-lg border mt-10 hover:scale-105" >
            </iframe> 
                </div> 
                </div>
                 </> 
                 )
                 }

/* ---------- CONNECTOR FORM (NEW FUNCTION) ---------- */
function ConnectorForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    loan: "",
    pan: "",
    aadhar: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = `${key} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("✅ Connector registration submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen  flex justify-center mt-14 pb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-xl shadow-md p-8"
      >
        <h2 className="text-center text-2xl font-bold text-pink-600 mb-8">
          Connector Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["firstName","lastName","company","email","phone","pan","aadhar"].map((field) => (
            <div key={field}>
              <input
                name={field}
                placeholder={field}
                className="border-2 border-cyan-600 p-1.5 w-full"
                value={formData[field]}
                onChange={handleChange}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}

          <select
            name="loan"
            className="border-2 border-cyan-600 p-1.5 w-full"
            value={formData.loan}
            onChange={handleChange}
          >
            <option value="">Choose a Loan</option>
            <option>Personal Loan</option>
            <option>Home Loan</option>
            <option>Business Loan</option>
            <option>Mortgage Loan</option>
          </select>
        </div>

        <textarea
          name="address"
          placeholder="Enter Your Address"
          rows="4"
          className="border-2 border-cyan-600 p-1.5 w-full mt-6"
          value={formData.address}
          onChange={handleChange}
        />

        {successMessage && (
          <>
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center mt-6 font-semibold">
              {successMessage}
            </div>

            <div className="text-center mt-3">
              <a
                href="https://wa.me/917989561133"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold underline"
              >
                💬 Chat with us on WhatsApp
              </a>
            </div>
          </>
        )}

        <div className="text-center mt-8">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-3 rounded-lg font-semibold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

