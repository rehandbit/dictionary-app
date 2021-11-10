import React from 'react'
import { createTheme, TextField, ThemeProvider} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem'
import './Header.css';
import categories from '../../data/category'



const Header = ({ setCategory, category, word, setWord, setMeaning, LightMode }) => {
	const darkTheme = createTheme({
		palette: {
			primamry: {
				main:LightMode?'#000' : "#fff"
			},
			type:LightMode? 'light' : 'dark',
		},
	});

	const handleChange = (e) => {
		setCategory(e.target.value);
		setWord("");
		setMeaning([]);
	}
	return (
		<div className='header' >
			<span className='title'>{word ? word : "Dictionary"} </span>
				<div className='inputs'>
					<ThemeProvider theme={darkTheme} >
						<TextField
							className="search"
							id="filled-basic"
							label="search a word"
							// value={word}
							onChange={(e) => setWord(e.target.value)}
						/>
					<TextField
						select
						className="select"
						label="language"
						value={category}
						onChange={(e) => handleChange(e)}
					>
						{
							categories.map((option) => (
								<MenuItem key={option.label} value={option.label} >{option.value}
								</MenuItem>

							))
						}
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default Header
