import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the User Profile App</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Avid reader and coffee enthusiast" />
    </div>
  );
}

export default App;
