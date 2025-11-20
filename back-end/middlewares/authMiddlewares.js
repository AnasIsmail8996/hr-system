import jwt from "jsonwebtoken";

export const checkVerify = (req, res, next) => {
    try {
    
        const token = req.headers.authorization.split(" ")[1];
     if(!token){
          return res.status(401).json({ message: "Authorization token missing" });
     }

        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);


        req.user = verifyUser;

  
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
            error: error.message
        });
    }
};


export const adminOnly = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied! Admin only."
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
