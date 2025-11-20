import User from "../models/user-models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
console.log(User, "user-model");

const userRegister = async (req, res) => {
    try {
        const { name, companyName, email, password } = req.body;


        if (!name || !email || !password || !companyName ) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing"
            });
        }

        const isExists = await User.findOne({ email });
        if (isExists) {
            return res.status(409).json({
                success: false,
                message: "Email already exists"
            });
        }

 
        const hashPass = await bcrypt.hash(password, 10);
        

        const userObj = {
            ...req.body,
            password: hashPass
        };

      
        const newUser = await User.create(userObj);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};




const userLogin=async(req , res)=>{
    try {
              const {  email, password , role} = req.body;


        if ( !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing"
            });
        }


        const user = await User.findOne({email})
          if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const comparePass= await bcrypt.compare(password, user.password);
         if (!comparePass) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            }); 
        }

        const  token = jwt.sign( {id : user._id , role : user.role, email : user.email}, process.env.SECRET_KEY, {
            expiresIn :"7d"
        })
         return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token
            }
        });


    } catch (error) {
            return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}



const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, companyName, email, password, role, imageUrl } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check email duplication
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(409).json({ success: false, message: "Email already in use" });
      }
    }

    // Update fields
    if (name) user.name = name;
    if (companyName) user.companyName = companyName;
    if (email) user.email = email;
    if (role) user.role = role;
    if (imageUrl) user.imageUrl = imageUrl;

    // Hash password only if provided
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    // Save changes
    const updatedUser = await user.save();

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Email Already Exists"
      });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const userObj = {
      ...req.body,
      password: hashPass
    };

    const newUser = await User.create(userObj);

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: newUser
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const findUser = await User.findById(id);
    if (!findUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: findUser
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};




export { userRegister, userLogin, updateUser, addUser, getSingleUser}