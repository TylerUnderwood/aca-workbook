import React, {Component} from 'react';
import DuckImage from '../img/duck-of-doom.jpg';

class Duck extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentClass: 'modal-closed',
			isOpen: true,
		};
	}

	open() {
		this.isOpen = true;
		this.modalOpening();
		setTimeout(() => {
			this.modalOpen();
		}, 640);
	}

	close() {
		this.modalClosing();
		setTimeout(() => {
			this.modalClosed();
			this.isOpen = false;
		}, 640);
	}

	modalOpening() {
		document.body.classList.remove('modal-closed');
		document.body.classList.add('modal-opening');
		this.setState({currentClass: 'modal-opening'});
	}
	modalOpen() {
		document.body.classList.replace('modal-opening', 'modal-open');
		this.setState({currentClass: 'modal-open'});
	}
	modalClosing() {
		document.body.classList.replace('modal-open', 'modal-closing');
		this.setState({currentClass: 'modal-closing'});
	}
	modalClosed() {
		document.body.classList.replace('modal-closing', 'modal-closed');
		this.setState({currentClass: 'modal-closed'});
	}

	render() { return (
		<div className="duck">
			<a onClick={() => { this.open() }}>Duck</a>
			<div className={['modal-wrapper', this.state.currentClass].join(' ')}>
				<div className="modal-overlay" onClick={() => { this.close() }}></div>
				<div className="modal">
					<button className="modal-close-button" onClick={() => { this.close() }}></button>
					<div className="modal-inner">
						<img src={DuckImage} />
					</div>
				</div>
			</div>
		</div>
	)}
}

export default Duck;