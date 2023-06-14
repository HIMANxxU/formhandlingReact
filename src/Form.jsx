import React, { useState } from "react";

const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
    paymentType: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setDetails((prevdetails) => {
      return { ...prevdetails, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    //Write redux logic # useDispatch
  };
  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input type="text" name="name" onChange={handleChange} />
        <h3>Email</h3>
        <input type="text" name="email" onChange={handleChange} />
        <h3>Password</h3>
        <input type="text" name="password" onChange={handleChange} />
        <h3>Message</h3>

        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <h3>Payment Type</h3>
        <select name="paymentType" onChange={handleChange}>
          <option value="Card">Card</option>
          <option value="Upi">Upi</option>
          <option value="Netbanking">Netbanking</option>
          <option value="NEFT">NEFT</option>
        </select>
        <button style={{ display: "block" }} type="submit">
          Submit
        </button>
      </form>
      <p>{JSON.stringify(details)}</p>
    </div>
  );
};

export default Form;
