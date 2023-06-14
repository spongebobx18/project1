// App.js
import React, { useState } from 'react';
import './App.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Dashboard = ({ studentInfo }) => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {studentInfo ? (
        <div>
          <h3>Welcome, {studentInfo.name}!</h3>
          <p>Email: {studentInfo.email}</p>
          <p>Age: {studentInfo.age}</p>
        </div>
      ) : (
        <p>No student information available.</p>
      )}
    </div>
  );
};

const StudentInfoPage = ({ handleInfoSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInfoSubmit({ name, email, age });
  };

  return (
    <div className="student-info-container">
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  const handleLogin = (email, password) => {
    setLoggedIn(true);
    // Perform login logic here
  };

  const handleInfoSubmit = (info) => {
    setStudentInfo(info);
    // Perform student info submission logic here
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="container">
          <div className="form-container">
            <Login handleLogin={handleLogin} />
          </div>
        </div>
      ) : (
        <div>
          <Dashboard studentInfo={studentInfo} />
          <StudentInfoPage handleInfoSubmit={handleInfoSubmit} />
        </div>
      )}
    </div>
  );
};

export default App;
