import React, { useEffect, useRef, useState } from "react";
import { Upload } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const Profile = () => {
  const { user, token, backEndUrl, getSingleUser } = useAuth();
  console.log("USER FROM CONTEXT ===>", user);

  const [pending, setPending] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });
  const imageRef = useRef();

  // Show temporary status message
  const showMessage = (text, type = "success") => {
    setStatusMessage({ text, type });
    setTimeout(() => setStatusMessage({ text: "", type: "" }), 3000);
  };

  // Initialize form with user data
  useEffect(() => {
    if (user) setPending(user);
  }, [user]);

  // Handle form input changes
  const handleChange = (e) => {
    setPending({ ...pending, [e.target.name]: e.target.value });
  };

  // Handle gender selection
  const handleGenderChange = (gender) => {
    if (isEditing) setPending({ ...pending, gender });
  };

  // Update profile
 const updateProfile = async () => {
  try {
    const res = await axios.put(
      `${backEndUrl}/user/update-profile/${user.id}`, 
      {
        name: pending.name,
        email: pending.email,
        role: pending.role,
        password: pending.password || "",
        imageUrl: pending.imageUrl || ""
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    showMessage("Profile Updated Successfully!", "success");
    getSingleUser(user.id); 
    setIsEditing(false);
  } catch (err) {
    console.log(err.response?.data || err);
    showMessage("Failed to update!", "error");
  }
};

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
    const res = await axios.post(`${backEndUrl}/api/upload`, formData, {
  headers: { Authorization: `Bearer ${token}` },
});

      setPending({ ...pending, imageUrl: res.data.url });
    } catch (err) {
      showMessage("Image upload failed", "error");
    }
  };

  if (!pending) return <p>Loading...</p>;

  const statusClasses =
    statusMessage.type === "success"
      ? "bg-green-100 border-green-400 text-green-700"
      : "bg-red-100 border-red-400 text-red-700";

  return (
    <div className="w-full">
      {statusMessage.text && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 border-l-4 rounded shadow-lg ${statusClasses}`}
        >
          <p className="font-semibold">{statusMessage.text}</p>
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-900 mb-10">My Profile</h2>

      {/* Profile Header */}
      <section className="bg-white p-6 rounded-xl shadow-lg mb-8 flex flex-col sm:flex-row items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
          <img
            src={
              pending?.imageUrl ||
              "https://placehold.co/128x128/3B82F6/FFFFFF?text=User"
            }
            alt="User"
            ref={imageRef}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ml-0 mt-4 sm:ml-6 sm:mt-0 text-center sm:text-left">
          <p className="text-gray-500 text-sm mb-2">Upload Profile Image</p>
          <input
            type="file"
            accept="image/*"
            onChange={uploadImage}
            disabled={!isEditing}
          />
        </div>
      </section>

      {/* Form */}
      <section className="bg-white p-8 rounded-xl shadow-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={pending.name || ""}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={pending.companyName || ""}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={pending.email || ""}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter new password"
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Role</label>
              <input
                type="text"
                name="role"
                value={pending.role || ""}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="font-semibold text-gray-700">Gender</label>
            <div className="flex space-x-3 mt-2">
              {["Male", "Female"].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => handleGenderChange(gender)}
                  disabled={!isEditing}
                  className={`px-6 py-2 rounded-lg border-2 ${
                    pending.gender === gender
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-300 text-gray-700"
                  } ${!isEditing && "opacity-70 cursor-not-allowed"}`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        </form>

        <div className="mt-10 border-t pt-6 flex space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={updateProfile}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>

              <button
                onClick={() => {
                  setPending(user);
                  setIsEditing(false);
                }}
                className="px-6 py-3 bg-white border rounded-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-3 bg-blue-50 text-blue-600 rounded-lg"
            >
              Edit Profile
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
