import React from 'react';
import '../Styles/Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

function Header() {
	return (
		<div className='header'>
			<h1>Header</h1>
			<IconButton>
				<PersonIcon fontSize="large" className = "header___icon"/>
			</IconButton>

            <img className="header___logo" src=""/>
		</div>
	);
}

export default Header;
