import fs from "fs";
import { cloudinaryUploader } from "../db/cloudinary.js";
import User from "../models/user-models.js";

const uploadImage = async (req, res) => {
  try {
 
    const uploadedImage = await cloudinaryUploader.upload(req.file.path);

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id, 
      { imageUrl: uploadedImage.secure_url },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      url: uploadedImage.secure_url,
      updatedUser
    });
  } catch (error) {
    console.log("Error uploading image:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  } finally {

    if (req.file && req.file.path) {
      fs.unlinkSync(req.file.path);
    }
  }
};

export { uploadImage };
