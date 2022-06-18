import React from 'react';

const List = props => (
	<ul>
	{
		props.items.map((item, index) => (
			<li key={index}>
				{ false ? (
				// { isActive ? (
					<div>
						<input value={item}></input><button>SUBMIT</button>
					</div>
				):(
					<div>
						<span>{item}</span><button>EDIT</button>
					</div>
				) }
			</li>
		))
	}
	</ul>
);

export default List;