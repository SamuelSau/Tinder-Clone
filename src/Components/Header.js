import React from 'react';
import '../Styles/Header.css';

//MaterialIU Icons
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
	return (
		<div className='header'>
			<IconButton size='small'>
				<PersonIcon fontSize='large' className='header___icon' />
			</IconButton>
			<img
				className='header___logo'
				src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Logo.wine.svg'
				alt='Tinder Logo'
			/>
			<IconButton size='small'>
				<ChatIcon fontSize='large' className='header___icon' />
			</IconButton>
		</div>
	);
}

export default Header;
