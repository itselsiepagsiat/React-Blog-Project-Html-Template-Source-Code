import { useState } from "react";

const initialFormData = {
  name: "", 
  email: "", 
  password: "", 
  confirmPassword: ""
};
const initialFormError = {
  name: "", 
  email: "", 
  password: "", 
  confirmPassword: ""
};

const Signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormError);

  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <div className="form-container">
      <form className="inner-container" onSubmit={handleChange}> 
        <h2 className="form-title">Signup Form</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Jhon Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="doe@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="***********"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Confirm password</label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            placeholder="***********"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input className="button" type="submit" value="Signup" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
