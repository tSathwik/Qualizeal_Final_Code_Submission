import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileUpload = () => {
  const email = localStorage.getItem("email");
  const [formData, setFormData] = useState({
    profileImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false); // Track if the image is uploaded

  useEffect(() => {
    // Fetch the profile image on component mount
    getProfileImg();
  }, []);

  const handleChange = async (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setFormData({ profileImage: file });
      await uploadImage(file); // Automatically upload the image once selected
    }
  };

  const uploadImage = async (file) => {
    setLoading(true); // Start loading
    const data = new FormData();
    data.append("profileImage", file);

    try {
      await axios.post(
        `http://localhost:3012/uploadPic/${email}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsUploaded(true); // Set the uploaded state to true
      toast.success("Profile uploaded successfully!"); // Show success toast
      getProfileImg(); // Fetch the uploaded image
    } catch (error) {
      toast.error("Error uploading profile. Please try again."); // Show error toast
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const getProfileImg = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3012/getProfilePic/${email}`
      );
      const data = response.data;
      if (data.success && data.imageUrl) {
        setFormData((prevState) => ({
          ...prevState,
          profileImage: data.imageUrl, // Set the image from the database
        }));
        setIsUploaded(true); // If image is found in DB, set upload to true
      } else {
        setIsUploaded(false); // No profile image found
      }
    } catch (e) {
      setIsUploaded(false); // Error fetching image or new worker
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profileImageInput").click(); // Trigger hidden file input
  };

  return (
    <div className="px-10">
      <form className="flex flex-col items-center">
        {/* Hidden file input */}
        <input
          type="file"
          name="profileImage"
          id="profileImageInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleChange}
        />

        {/* Display uploaded image */}
        {isUploaded && formData.profileImage && (
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <img
              src={formData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Upload button */}
        {!isUploaded && (
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={triggerFileInput}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        )}
      </form>

      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProfileUpload;
