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
