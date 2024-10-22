// import React, { createContext, useContext, useEffect, useState } from "react";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [userData, setUserData] = useState({});
//   const [userId, setUserId] = useState(localStorage.getItem("userId"));

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!userId) {
//         console.log("No userId found, resetting userData.");
//         setUserData({});
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:3000/getUserInfo/${userId}`
//         );
//         const result = await response.json();
//         console.log("Fetched User Data:", result);

//         if (response.ok && result.status === "success") {
//           setUserData(result.user);
//           console.log("User data set in context");
//         } else {
//           console.error("Failed to fetch user data:", result.message);
//           setUserData({});
//         }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setUserData({});
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   const updateUserId = (id) => {
//     localStorage.setItem("userId", id);
//     setUserId(id);
//   };

//   const resetUserData = () => {
//     console.log("Resetting user data.");
//     localStorage.removeItem("userId");
//     setUserId(null);
//     setUserData({});
//   };

//   // Method to update personal information
//   const updatePersonalInfo = async (updatedData) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/updatePersonalInfo/${userId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedData),
//         }
//       );

//       const result = await response.json();

//       if (response.ok && result.status === "success") {
//         setUserData((prevData) => ({
//           ...prevData,
//           ...result.user,
//         }));
//         console.log("Personal info updated in context");
//       } else {
//         console.error("Failed to update personal info:", result.message);
//       }
//     } catch (err) {
//       console.error("Error updating personal info:", err);
//     }
//   };

//   // Method to update address information
//   const updateAddressInfo = async (updatedData) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/updateAddressInfo/${userId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedData),
//         }
//       );

//       const result = await response.json();

//       if (response.ok && result.status === "success") {
//         setUserData((prevData) => ({
//           ...prevData,
//           city: updatedData.city,
//           zip: updatedData.zip,
//           country: updatedData.country,
//         }));
//         console.log("Address info updated in context");
//       } else {
//         console.error("Failed to update address info:", result.message);
//       }
//     } catch (err) {
//       console.error("Error updating address info:", err);
//     }
//   };

//   // Method to update device information
//   const updateDeviceInfo = async (updatedData) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/updateDeviceInfo/${userId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedData),
//         }
//       );

//       const result = await response.json();

//       if (response.ok && result.status === "success") {
//         setUserData((prevData) => ({
//           ...prevData,
//           computer: updatedData.computer,
//           version: updatedData.version,
//           language: updatedData.language,
//           mobile: updatedData.mobile,
//           model: updatedData.model,
//           os: updatedData.os,
//         }));
//         console.log("Device info updated in context");
//       } else {
//         console.error("Failed to update device info:", result.message);
//       }
//     } catch (err) {
//       console.error("Error updating device info:", err);
//     }
//   };

//   return (
//     <DataContext.Provider
//       value={{
//         userData,
//         updateUserId,
//         resetUserData,
//         updatePersonalInfo,
//         updateAddressInfo,
//         updateDeviceInfo,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useDataContext = () => useContext(DataContext);

import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        console.log("No userId found, resetting userData.");
        setUserData({});
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/getUserInfo/${userId}`
        );
        const result = await response.json();
        console.log("Fetched User Data:", result);

        if (response.ok && result.status === "success") {
          setUserData(result.user);
          console.log("User data set in context:", result.user);
        } else {
          console.error("Failed to fetch user data:", result.message);
          setUserData({});
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setUserData({});
      }
    };

    fetchUserData();
  }, [userId]);

  const updateUserId = (id) => {
    localStorage.setItem("userId", id);
    setUserId(id);
  };

  const resetUserData = () => {
    console.log("Resetting user data.");
    localStorage.removeItem("userId");
    setUserId(null);
    setUserData({});
  };

  // Method to update personal information
  // const updatePersonalInfo = async (updatedData) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3000/updatePersonalInfo/${userId}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(updatedData),
  //       }
  //     );

  //     const result = await response.json();

  //     if (response.ok && result.status === "success") {
  //       setUserData((prevData) => ({
  //         ...prevData,
  //         ...result.user,
  //       }));
  //       console.log("Personal info updated in context:", result.user);
  //     } else {
  //       console.error("Failed to update personal info:", result.message);
  //     }
  //   } catch (err) {
  //     console.error("Error updating personal info:", err);
  //   }
  // };

  const updatePersonalInfo = async (updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:3000/updatePersonalInfo/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setUserData((prevData) => ({
          ...prevData,
          ...result.user, // Ensure all fields are updated
        }));
        console.log("Personal info updated in context:", result.user);
      } else {
        console.error("Failed to update personal info:", result.message);
      }
    } catch (err) {
      console.error("Error updating personal info:", err);
    }
  };

  // Method to update address information
  const updateAddressInfo = async (updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:3000/updateAddressInfo/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setUserData((prevData) => ({
          ...prevData,
          city: updatedData.city,
          zip: updatedData.zip,
          country: updatedData.country,
        }));
        console.log("Address info updated in context:", result.user);
      } else {
        console.error("Failed to update address info:", result.message);
      }
    } catch (err) {
      console.error("Error updating address info:", err);
    }
  };

  // Method to update device information
  const updateDeviceInfo = async (updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:3000/updateDeviceInfo/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setUserData((prevData) => ({
          ...prevData,
          computer: updatedData.computer,
          version: updatedData.version,
          language: updatedData.language,
          mobile: updatedData.mobile,
          model: updatedData.model,
          os: updatedData.os,
        }));
        console.log("Device info updated in context:", result.user);
      } else {
        console.error("Failed to update device info:", result.message);
      }
    } catch (err) {
      console.error("Error updating device info:", err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        userData,
        updateUserId,
        resetUserData,
        updatePersonalInfo,
        updateAddressInfo,
        updateDeviceInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
