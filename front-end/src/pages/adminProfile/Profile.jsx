import React, { useState } from "react";
import { Upload } from "lucide-react";

const initialUserData = {
  firstName: "Brown",
  lastName: "Martin",
  email: "brownmartin@gmail.com",
  mobileNumber: "0806 123 7890",
  gender: "Male",
};

const Profile = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [pendingChanges, setPendingChanges] = useState(initialUserData);
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPendingChanges((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (gender) => {
    if (isEditing) {
      setPendingChanges((prev) => ({ ...prev, gender }));
    }
  };

  const showMessage = (text, type = "success") => {
    setStatusMessage({ text, type });
    setTimeout(() => setStatusMessage({ text: "", type: "" }), 3000);
  };

  const handleSaveChanges = () => {
    if (!pendingChanges.firstName || !pendingChanges.email) {
      showMessage("Please fill in all required fields.", "error");
      return;
    }

    setUserData(pendingChanges);
    setIsEditing(false);
    showMessage("Profile updated successfully!", "success");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setPendingChanges(userData);
    }
    setIsEditing(!isEditing);
  };

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
            src="https://placehold.co/128x128/3B82F6/FFFFFF?text=User"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ml-0 mt-4 sm:ml-6 sm:mt-0 text-center sm:text-left">
          <p className="text-gray-500 text-sm mb-2">800x800 px recommended</p>
          <button
            onClick={() =>
              showMessage("Upload functionality is not implemented yet.", "error")
            }
            disabled={!isEditing}
            className={`flex items-center text-blue-600 py-2 px-3 rounded-lg ${
              isEditing ? "hover:bg-blue-50" : "opacity-50 cursor-not-allowed"
            }`}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload new photo
          </button>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white p-8 rounded-xl shadow-lg">
        <form className="space-y-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={pendingChanges.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={pendingChanges.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={pendingChanges.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={pendingChanges.mobileNumber}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-3 border rounded-lg ${
                  isEditing ? "border-blue-400" : "border-gray-200 bg-gray-50"
                }`}
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="font-semibold text-gray-700">Gender</label>
            <div className="flex space-x-3 mt-2">
              {["Male", "Female"].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => handleGenderChange(gender)}
                  disabled={!isEditing}
                  className={`px-6 py-2 rounded-lg border-2 ${
                    pendingChanges.gender === gender
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

        {/* Buttons */}
        <div className="mt-10 border-t pt-6 flex space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveChanges}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>

              <button
                onClick={handleEditToggle}
                className="px-6 py-3 bg-white border rounded-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
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
