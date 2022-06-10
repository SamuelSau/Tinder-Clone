import React from 'react';
import './App.css';

//Importing Components
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';

function App() {
	return (
		<div className='App'>
			{/* Header */}
			<Header />
			{/* TinderCards */}
			<TinderCards />
			{/* Swipe Buttons */}
		</div>
	);
}

export default App;
