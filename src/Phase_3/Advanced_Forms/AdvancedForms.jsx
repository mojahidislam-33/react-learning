import { useState } from "react";

function AdvancedForms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
    terms: false,
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSkillChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(
          (skill) => skill !== value
        ),
      });
    }
  }

  function handleTermsChange(e) {
    setFormData({
      ...formData,
      terms: e.target.checked,
    });
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!formData.country) {
      newErrors.country = "Please select country";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    console.log("Form Submitted:", formData);

    alert("Registration successful!");
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="enter your name.."
          />

          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="enter your email.."
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="enter your password.."
          />

          {errors.password && <p>{errors.password}</p>}
        </div>

        {/* Gender */}
        <div>
          <p>Gender</p>

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          {errors.gender && <p>{errors.gender}</p>}
        </div>

        {/* Country */}
        <div>
          <label>Country</label>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
          </select>

          {errors.country && <p>{errors.country}</p>}
        </div>

        {/* Skills */}
        <div>
          <p>Skills</p>

          <label>
            <input
              type="checkbox"
              value="HTML"
              checked={formData.skills.includes("HTML")}
              onChange={handleSkillChange}
            />
            HTML
          </label>

          <label>
            <input
              type="checkbox"
              value="CSS"
              checked={formData.skills.includes("CSS")}
              onChange={handleSkillChange}
            />
            CSS
          </label>

          <label>
            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleSkillChange}
            />
            React
          </label>

          {errors.skills && <p>{errors.skills}</p>}
        </div>

        {/* Terms */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={formData.terms}
              onChange={handleTermsChange}
            />
            I agree to the terms and conditions
          </label>

          {errors.terms && <p>{errors.terms}</p>}
        </div>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default AdvancedForms;