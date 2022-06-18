import React, {Component} from 'react';
import OnlineSwitch from './OnlineSwitch';
import VolumeSlider from './VolumeSlider';
import SoundQuality from './SoundQuality';
// import SliderCard from './SliderCard';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notifications: [],
			online: true,
			volume: 80,
			quality: 'normal',
		};
	}

	// this recives a string and adds or removes it based on if it is in the notifications array
	toggleNotification = ( msg ) => {
		const msgIndex = this.state.notifications.indexOf( msg )

		if ( this.state.notifications.includes( msg ) ) {
			this.state.notifications.splice( msgIndex, 1 )
		} else {
			this.setState({ notifications: [...this.state.notifications, msg] })
		}
	}
	addNotification = ( msg ) => {
		this.setState({ notifications: [...this.state.notifications, msg] })
	}
	removeNotification = ( msg ) => {
		const msgIndex = this.state.notifications.indexOf( msg )
		this.state.notifications.splice( msgIndex, 1 )
	}

	toggleOnline = () => {
		this.setState({ online: !this.state.online })

		const msg = "Your application is offline. You won't be able to share or stream music to other devices."

		this.toggleNotification( msg )
	}
	
	volumeSlider = ( newValue ) => {
		this.setState({ volume: newValue })

		const msg = "Listening to music at a high volume could cause long-term hearing loss."

		if ( (newValue > 80) && !this.state.notifications.includes( msg ) ) {
			this.addNotification( msg )
		}
		if ( (newValue <= 80) && this.state.notifications.includes( msg ) ) {
			this.removeNotification( msg )
		}
	}

	soundQuality = ( event ) => {
		this.setState({ quality: event.target.value })

		const msg = "Music quality is degraded. Increase quality if your connection allows it."

		if ( (event.target.value === 'low') && !this.state.notifications.includes( msg ) ) {
			this.addNotification( msg )
		}
		if ( (event.target.value !== 'low') && this.state.notifications.includes( msg ) ) {
			this.removeNotification( msg )
		}
	}

	render() {
		return (
			<div className="dashboard wrapper">

				<div className="dashboard-control-row">
					
					<div className="dashboard-control-col">
						<OnlineSwitch
							onlineState={this.state.online}
							onlineFunc={this.toggleOnline}>
						</OnlineSwitch>
					</div>

					<div className="dashboard-control-col">
						<VolumeSlider
							volumeState={this.state.volume}
							volumeFunc={this.volumeSlider}>
						</VolumeSlider>
					</div>

					<div className="dashboard-control-col">
						<SoundQuality 
							qualityState={this.state.quality} 
							qualityFunc={this.soundQuality}>	
						</SoundQuality>
					</div>

				</div> {/* END dashboard-control-row */}

				<div className="notifications frame-top">
					<h3>Notifications:</h3>
					{this.state.notifications.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>

			</div>
		)
	}
	
}

export default Dashboard;
