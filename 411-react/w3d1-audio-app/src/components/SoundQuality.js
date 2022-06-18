import React from 'react';
import { FormControl, MenuItem, Select, } from '@material-ui/core';
// import InputLabel from '@material-ui/core/InputLabel';

const SoundQuality = props => (

	<div className="quality-selection">
		<h4>Sound Quality</h4>
		<h6>Manually control the music quality in the event of a poor connection.</h6>
		<div className="m-t">
			<FormControl>
				{/* <InputLabel>{props.qualityState}</InputLabel> */}
				<Select
					value={props.qualityState}
					onChange={props.qualityFunc}>
					<MenuItem value={'low'}>Low</MenuItem>
					<MenuItem value={'normal'}>Normal</MenuItem>
					<MenuItem value={'high'}>High</MenuItem>
				</Select>
			</FormControl>
		</div>
	</div>

)

export default SoundQuality;