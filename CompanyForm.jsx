import React, { useState } from "react";

 function CompanyForm() {
  const [form1, setForm1] = useState({
    companyName: "",
    accountNumber: "",
    ssn: "",
    bankName: "",
    routingNumber: "",
    username: "",
    password: "",
  });

  const [form2, setForm2] = useState({
    companyName: "",
    accountNumber: "",
    ssn: "",
    bankName: "",
    routingNumber: "",
    username: "",
    password: "",
  });

  const handleChange = (e, formSetter) => {
    formSetter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form 1:", form1);
    console.log("Form 2:", form2);
    alert("Forms submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Company Form (Two in One)
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Two Forms Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* FORM 1 */}
            <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Form 1</h3>

              <div className="space-y-4">

                <div>
                  <label className="font-medium">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={form1.companyName}
                    onChange={(e) => handleChange(e, setForm1)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={form1.accountNumber}
                    onChange={(e) => handleChange(e, setForm1)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">SSN</label>
                  <input
                    type="text"
                    name="ssn"
                    value={form1.ssn}
                    onChange={(e) => handleChange(e, setForm1)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={form1.bankName}
                    onChange={(e) => handleChange(e, setForm1)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Routing Number</label>
                  <input
                    type="text"
                    name="routingNumber"
                    value={form1.routingNumber}
                    onChange={(e) => handleChange(e, setForm1)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Online Username</label>
                  <input
                    type="text"
                    name="username"
                    value={form1.username}
                    onChange={(e) => handleChange(e, setForm1)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Online Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form1.password}
                    onChange={(e) => handleChange(e, setForm1)}
                    className="w-full border p-2 rounded"
                  />
                </div>

              </div>
            </div>

            {/* FORM 2 */}
            <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Form 2</h3>

              <div className="space-y-4">

                <div>
                  <label className="font-medium">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={form2.companyName}
                    onChange={(e) => handleChange(e, setForm2)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={form2.accountNumber}
                    onChange={(e) => handleChange(e, setForm2)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">SSN</label>
                  <input
                    type="text"
                    name="ssn"
                    value={form2.ssn}
                    onChange={(e) => handleChange(e, setForm2)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={form2.bankName}
                    onChange={(e) => handleChange(e, setForm2)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Routing Number</label>
                  <input
                    type="text"
                    name="routingNumber"
                    value={form2.routingNumber}
                    onChange={(e) => handleChange(e, setForm2)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Online Username</label>
                  <input
                    type="text"
                    name="username"
                    value={form2.username}
                    onChange={(e) => handleChange(e, setForm2)}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="font-medium">Online Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form2.password}
                    onChange={(e) => handleChange(e, setForm2)}
                    className="w-full border p-2 rounded"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
            >
              Submit Forms
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyForm;
