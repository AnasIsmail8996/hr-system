import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import quoteImg1 from "../../components/images/c2feeaf790bdcfc9f4e4b26f6fbc43c95af477d7.jpg";
import quoteImg2 from "../../components/images/d8bd20a1e5cbc6e425d1a55c8432761d60a03a98.jpg";
import ReactCompareImage from "react-compare-image";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios"
import toast from "react-hot-toast";


const Register = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm();
     const { backEndUrl}= useAuth();
    
     
const onSubmit = async (data) => {
    try {
        const response = await axios.post(`${backEndUrl}/user/register`, { ...data });
        
        if(response.data.success){
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);    
        }

        console.log(response.data);

    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
        console.error(error.response?.data || error.message);
    }
};


    const passwordValue = watch("password");

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center px-6 lg:px-16 bg-white">
                <div className="w-full max-w-md">

                    <h1 className="text-4xl font-bold mb-3 text-center">Sign Up</h1>
                    <p className="text-center text-gray-600 mb-8">
                        Enter your details to create your account.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <div>
                            <label className="block mb-2 font-medium">Name</label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: "Name is required" }}
                                render={({ field }) => (
                                    <Input {...field} placeholder="Enter Email" className="h-11" />
                                )}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Company Name</label>
                            <Controller
                                name="companyName"
                                control={control}
                                rules={{
                                    required: "Company name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Company name must be at least 3 characters",
                                    },
                                }}
                                render={({ field }) => (
                                    <Input {...field} placeholder="Your Company Name" className="h-11" />
                                )}
                            />
                            {errors.companyName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.companyName.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Email Address</label>
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
                                render={({ field }) => (
                                    <Input {...field} placeholder="Enter Email" className="h-11" />
                                )}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Password</label>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                }}
                                render={({ field }) => (
                                    <Input.Password
                                        {...field}
                                        placeholder="Enter password"
                                        iconRender={(visible) =>
                                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                        }
                                        className="h-11"
                                    />
                                )}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Confirm Password</label>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                rules={{
                                    required: "Confirm your password",
                                    validate: (value) =>
                                        value === passwordValue || "Passwords do not match",
                                }}
                                render={({ field }) => (
                                    <Input.Password
                                        {...field}
                                        placeholder="Enter Confirm password"
                                        iconRender={(visible) =>
                                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                        }
                                        className="h-11"
                                    />
                                )}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        <div className="text-right">
                            <Link to="/forgot-password" className="text-blue-600">
                                Forgot password?
                            </Link>
                        </div>

                        <div>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full h-11! font-medium bg-blue-500 hover:bg-blue-600"
                            >
                                Sign Up
                            </Button>
                        </div>

                    </form>
                </div>
            </div>

            {/* Right Side (Visual Section) */}
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

                            leftImageCss={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                            }}
                            rightImageCss={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                            }}

                            aspectRatio="wider"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Your Vision, Our Expertise</h2>
                        <p className="max-w-lg text-sm opacity-90">
                            Experience seamless collaboration where your goals meet our
                            professional expertise. Together, we create exceptional results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
