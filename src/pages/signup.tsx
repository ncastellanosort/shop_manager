import { Link } from "react-router-dom";
import { Building2, UserRound } from "lucide-react";
import { useState } from "react";
import type { SignUp } from "../types/signup";
import { useRegister } from "../hooks/use-register";

function Signup() {
  const [formData, setFormData] = useState<SignUp>({
    taxId: 0,
    name: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const { register } = useRegister();


  function handleChange(e: React.ChangeEvent<HTMLinputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmedPassword) {
       alert("Passwords do not match");
       return;
    }

    if (!formData.email || !formData.name || !formData.taxId) {
       alert("Please fill all required fields");
       return;
    }

    register(formData);
  };

    return (
    <section className="w-full flex justify-center items-center">
      <form className="w-[800px] p-4" onSubmit={handleSubmit}>
        <Building2 className="text-orange-500 mx-auto my-2"/>
        <h4 className="text-neutral-100 font-bold pt-2 text-center">
        FlowERP
        </h4>
        <h2 className="text-neutral-100 text-center font-bold text-3xl p-4">Create an account</h2>
        <div>
          <p className="mx-4 text-neutral-200">Profile image</p>
          <UserRound className="text-neutral-200"/>
          <input type="file"></input>
        </div>
        <div className="grid grid-cols-2">
          <input name="taxId" placeholder="Tax ID" type="number" value={formData.taxId} onChange={handleChange}/>
          <input name="name" placeholder="Name" type="text" value={formData.name} onChange={handleChange}/>
          <input name="address" placeholder="Address" type="text" value={formData.address} onChange={handleChange}/>
          <input name="contact" placeholder="Contact" type="tel" value={formData.contact} onChange={handleChange}/>
          <input name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange}/>
          <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange}/>
          <input name="confirmedPassword" placeholder="Confirm Password" type="password" value={formData.confirmedPassword} onChange={handleChange}/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="
               m-4
               py-3 px-8 
               text-neutral-900
               font-bold
               rounded-md
               bg-orange-500
               border border-orange-600
               hover:bg-neutral-950
               hover:text-neutral-100
               hover:border
               hover:border-neutral-800
               animation
               duration-150
               cursor-pointer
                ">
                Start your management
            </button>
          <div className="flex flex-row justify-center">
            <label className="text-neutral-100 text-md px-4 py-2">Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline"> Login</Link>
            </label>
          </div>
          </div>
      </form>
    </section>
  );
}

export default Signup;
