import React, { useState, useEffect, useRef } from "react";
import {
  FaBell,
  FaQrcode,
  FaMoneyBill,
  FaMobileAlt,
  FaWallet,
  FaUser,
  FaChartBar,
  FaEdit,
  FaPlus,
} from "react-icons/fa";
import "./Dashboard.css";
import api from "../utils/api";



function Dashboard() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [walletAnalytics, setWalletAnalytics] = useState({});
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [newFundAmount, setNewFundAmount] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("");
  const [newBeneficiary, setNewBeneficiary] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  const walletAnalyticsRef = useRef(null);
  const transactionHistoryRef = useRef(null);

  // Fetch data when the component loads
  useEffect(() => {
    fetchUserProfile();
    fetchWalletAnalytics();
    fetchBeneficiaries();
    fetchTransactionHistory();
  }, []);

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const response = await fetch("/api/users/profile");
      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  // Fetch wallet analytics
  const fetchWalletAnalytics = async () => {
    try {
      const response = await fetch("/api/wallet-analytics");
      const data = await response.json();
      setWalletAnalytics(data);
    } catch (error) {
      console.error("Error fetching wallet analytics:", error);
    }
  };

  // Fetch beneficiaries
  const fetchBeneficiaries = async () => {
    try {
      const response = await fetch("/api/beneficiaries");
      const data = await response.json();
      setBeneficiaries(data);
    } catch (error) {
      console.error("Error fetching beneficiaries:", error);
    }
  };

  // Fetch transaction history
  const fetchTransactionHistory = async () => {
    try {
      const response = await fetch("/api/transaction-history");
      const data = await response.json();
      setTransactionHistory(data);
    } catch (error) {
      console.error("Error fetching transaction history:", error);
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSave = async () => {
    try {
     
      const response = await api.put("/users/profile", userProfile);
  
      if (response.status !== 200) {
        throw new Error("Error saving user profile");
      }
  
      // If successful, close the edit mode
      setIsEditingProfile(false);
  
      fetchUserProfile();
    } catch (error) {
      console.error("Error saving user profile:", error);
    }
  };

    // Handle changes in user profile inputs
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  const handleAddFunds = async () => {
    if (newFundAmount > 0) {
      try {
        const response = await fetch("/api/add-funds", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: parseFloat(newFundAmount) }),
        });
        const updatedAnalytics = await response.json();
        setWalletAnalytics(updatedAnalytics);
        setNewFundAmount("");
      } catch (error) {
        console.error("Error adding funds:", error);
      }
    }
  };

  const handleSendMoney = async () => {
    if (selectedBeneficiary && sendAmount > 0) {
      try {
        const response = await fetch("/api/send-money", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            beneficiary: selectedBeneficiary,
            amount: parseFloat(sendAmount),
          }),
        });
        const updatedAnalytics = await response.json();
        setWalletAnalytics(updatedAnalytics);
        fetchTransactionHistory(); // Refresh transaction history
        setSendAmount("");
      } catch (error) {
        console.error("Error sending money:", error);
      }
    }
  };

  const handleAddBeneficiary = async () => {
    if (newBeneficiary.name && newBeneficiary.email) {
      try {
        const response = await fetch("/api/beneficiaries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBeneficiary),
        });
        const addedBeneficiary = await response.json();
        setBeneficiaries((prev) => [...prev, addedBeneficiary]);
        setNewBeneficiary({ name: "", email: "", avatar: "" });
      } catch (error) {
        console.error("Error adding beneficiary:", error);
      }
    }
  };

  const handleStatsClick = () =>
    walletAnalyticsRef.current.scrollIntoView({ behavior: "smooth" });
  const handleTransactionsClick = () =>
    transactionHistoryRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="greeting">
          <h1>Hello, {userProfile.name || "User"} 👋</h1>
          <p>{new Date().toDateString()}</p>
        </div>
        <div className="header-actions">
          <FaBell className="icon bell-icon" />
          <img
            src={userProfile.avatar || "https://via.placeholder.com/50"}
            alt="User Avatar"
            className="user-avatar"
          />
        </div>
      </header>

      {/* Balance Section */}
      <div className="balance-section">
        <div className="balance-card">
          <p>Total Balance</p>
          <h2>${walletAnalytics.totalBalance?.toFixed(2) || "0.00"}</h2>
          <p>Account No: ****8046</p>
          <FaQrcode className="icon qr-icon" />
        </div>
      </div>

      {/* Wallet Analytics Section */}
      <div className="wallet-analytics-section" ref={walletAnalyticsRef}>
        <h3>Wallet Analytics</h3>
        <div className="analytics-grid">
          <div className="analytics-item">
            <FaChartBar />
            <span>Total Transfers: ${walletAnalytics.totalTransfers?.toFixed(2) || "0.00"}</span>
          </div>
          <div className="analytics-item">
            <FaChartBar />
            <span>Pending Transfers: ${walletAnalytics.pendingTransfers?.toFixed(2) || "0.00"}</span>
          </div>
          <div className="analytics-item">
            <FaChartBar />
            <span>Total Transactions: {walletAnalytics.totalTransactions || 0}</span>
          </div>
        </div>
      </div>

      {/* Add Funds Section */}
      <div className="add-funds-section">
        <h3>Add Funds</h3>
        <input
          type="number"
          placeholder="Enter amount"
          value={newFundAmount}
          onChange={(e) => setNewFundAmount(e.target.value)}
        />
        <button onClick={handleAddFunds}>Add Funds</button>
      </div>

      {/* Send Money Section */}
      <div className="send-money-section">
        <h3>Send Money</h3>
        <select
          value={selectedBeneficiary}
          onChange={(e) => setSelectedBeneficiary(e.target.value)}
        >
          <option value="">Select Beneficiary</option>
          {beneficiaries.map((beneficiary, index) => (
            <option key={index} value={beneficiary.name}>
              {beneficiary.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter amount"
          value={sendAmount}
          onChange={(e) => setSendAmount(e.target.value)}
        />
        <button onClick={handleSendMoney}>Send Money</button>
      </div>

      {/* Add Beneficiary Section */}
      <div className="add-beneficiary-section">
        <h3>Add Beneficiary</h3>
        <input
          type="text"
          placeholder="Beneficiary Name"
          value={newBeneficiary.name}
          onChange={(e) => setNewBeneficiary({ ...newBeneficiary, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Beneficiary Email"
          value={newBeneficiary.email}
          onChange={(e) => setNewBeneficiary({ ...newBeneficiary, email: e.target.value })}
        />
        <button onClick={handleAddBeneficiary}><FaPlus /> Add Beneficiary</button>
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity-section" ref={transactionHistoryRef}>
        <h3>Recent Activity</h3>
        {transactionHistory.map((transaction, index) => (
          <div className="activity" key={index}>
            <p>{transaction.beneficiary}</p>
            <p>${transaction.amount.toFixed(2)}</p>
            <p>{new Date(transaction.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {/* Edit Profile Section */}
      <div className="edit-profile-section">
        <h3>Edit Profile</h3>
        {isEditingProfile ? (
          <>
            <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={userProfile.firstName}
                    onChange={handleChange}
            />
            <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={userProfile.lastName}
                    onChange={handleChange}
            />
            <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={userProfile.phoneNumber}
                    onChange={handleChange}
           />
           <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={userProfile.dateOfBirth}
                    onChange={handleChange}
            />
            <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={userProfile.address}
                    onChange={handleChange}
            />
            <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={userProfile.city}
                    onChange={handleChange}
            />
            <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={userProfile.country}
                    onChange={handleChange}
            />
            <input
                    type="text"
                    name="profilePicture"
                    placeholder="Profile Picture URL"
                    value={userProfile.profilePicture}
                    onChange={handleChange}
            />
            <button onClick={handleProfileSave}>Save</button>
          </>
        ) : (
          <>
            <p>First Name: {userProfile.firstName || "Not set"}</p>
            <p>Last Name: {userProfile.lastName || "Not set"}</p>
            <p>Phone Number: {userProfile.phoneNumber || "Not set"}</p>
            <p>Date of Birth: {userProfile.dateOfBirth || "Not set"}</p>
            <p>Address: {userProfile.address || "Not set"}</p>
            <p>City: {userProfile.city || "Not set"}</p>
            <p>Country: {userProfile.country || "Not set"}</p>
            <button onClick={() => setIsEditingProfile(true)}>
              <FaEdit /> Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;