document.getElementById('getUsers').addEventListener('click', getUsers);

function getUsers() {
	fetch('https://randomuser.me/api/?results=5')
		.then((res)=>res.json())
		
			.then((data)=>{
				
				let output = '<h3>Five Random Users</h3>'

				data.results.forEach(user => {
					
					output += `
						<div class="user-card">
							<div class="img-wrap">
								<img src="${user.picture.large}"/>
							</div>
							<ul>
								<li><strong>Name:</strong> ${user.name.first} ${user.name.last}</li>
								<li><strong>Age:</strong> ${user.dob.age}</li>
								<li><strong>Email:</strong> ${user.email}</li>
							</ul>
						</div>
					`;
				})

				document.getElementById('randomUsers').innerHTML = output;
			})
}