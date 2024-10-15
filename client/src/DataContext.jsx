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

  const updateUserData = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/updateUserInfo/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.status === "success") {
        setUserData(result.user); // Assuming the updated user data comes back
        console.log("User data updated:", result.user);
      } else {
        console.error("Failed to update user data:", result.message);
      }
    } catch (err) {
      console.error("Error updating user data:", err);
    }
  };

  return (
    <DataContext.Provider value={{ userData, updateUserId, resetUserData , updateUserData}}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
