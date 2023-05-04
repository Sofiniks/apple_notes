import React from "react";
import { TextField } from "@mui/material";

const SearchBox: React.FC = () => {
	return (
		<>
			<TextField
				placeholder='Search notes...'
				variant='outlined'
				fullWidth
				margin='normal'
			/>
		</>
	);
};

export default SearchBox;
