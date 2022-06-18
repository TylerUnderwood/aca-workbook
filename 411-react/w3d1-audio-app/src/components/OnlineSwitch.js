import React from 'react';
import { FormControlLabel, FormGroup, Switch, } from '@material-ui/core';

const OnlineSwitch = props => (

	<div className="online-switch">
		<h4>Online Mode</h4>
		<h6>Is this application connected to the internet?</h6>
		<div className="m-t">
			<FormGroup>
				<FormControlLabel
					control={
						<Switch 
							checked={props.onlineState} 
							onChange={props.onlineFunc} 
						/>}
					label="Online"
				/>
			</FormGroup>
		</div>
	</div>

)

export default OnlineSwitch;
