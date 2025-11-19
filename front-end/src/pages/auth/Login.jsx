import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import quoteImg1 from "../../components/images/c2feeaf790bdcfc9f4e4b26f6fbc43c95af477d7.jpg";
import quoteImg2 from "../../components/images/d8bd20a1e5cbc6e425d1a55c8432761d60a03a98.jpg";
import ReactCompareImage from "react-compare-image";
import toast from "react-hot-toast"
import axios from "axios"


const Login = () => {
  const [loginType, setLoginType] = useState(""); 
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const passwordValue = watch("password");
  const { login , backEndUrl} = useAuth();
  const navigate = useNavigate();

const onSubmit = async (data) => {
    if (!loginType) {
        alert("Please select login type: User or Admin");
        return;
    }

    const loginData = { ...data, role: loginType };

    try {
        const response = await axios.post(`${backEndUrl}/user/login`, loginData);
        
        if (response.data.success) {
         
            localStorage.setItem("user", JSON.stringify(response.data.data.user));
            localStorage.setItem("token", response.data.data.token);

            toast.success(response.data.message);
            navigate("/"); 
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
        console.error(error.response?.data || error.message);
    }
};


  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">

      {/* Left Side - Login Form */}
     <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center px-6 lg:px-16 bg-white">
  <div className="w-full max-w-md">
    <h1 className="text-4xl font-bold mb-3 text-center">Log in</h1>
    <p className="text-center text-gray-600 mb-4">Enter your email and password as admin log in.</p>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          }}
          render={({ field }) => <Input {...field} placeholder="Enter Email" className="h-11" />}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 font-medium">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          }}
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="Enter Password"
              iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
              className="h-11"
            />
          )}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div className="text-right">
        <Link to="/forgot-password" className="text-blue-600">Forgot password?</Link>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full h-11 font-medium bg-blue-500 hover:bg-blue-600"
        >
          Login
        </Button>
      </div>

      {/* Login Type Buttons - stacked vertically */}
      <div className="flex flex-col gap-3 mt-4">
        <Button
          type={loginType === "user" ? "primary" : "default"}
          onClick={() => setLoginType("user")}
          className="w-full h-11 p-12"
        >
          Login as User
        </Button>
        <Button
          type={loginType === "admin" ? "primary" : "default"}
          onClick={() => setLoginType("admin")}
          className="w-full h-11"
        >
          Login as Admin
        </Button>
      </div>

    </form>
  </div>
</div>


      {/* Right Side - Visual Section */}
      <div className="hidden md:flex w-full md:w-1/2 bg-[#007bff] text-white flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#ffffff33,transparent_70%)]"></div>
        <div className="z-10 flex flex-col justify-center items-center text-center px-6 gap-4">
          <div className="w-[300px] md:w-[380px] h-[440px] overflow-hidden relative rounded-lg mx-auto">
            <ReactCompareImage
              leftImage={quoteImg1}
              rightImage={quoteImg2}
              sliderLineColor="#444"
              sliderLineWidth={2}
              handleSize={35}
              leftImageCss={{ height: "100%", width: "100%", objectFit: "contain" }}
              rightImageCss={{ height: "100%", width: "100%", objectFit: "contain" }}
              aspectRatio="wider"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Vision, Our Expertise</h2>
            <p className="max-w-lg text-sm opacity-90">
              Experience seamless collaboration where your goals meet our professional expertise. Together, we create exceptional results.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
