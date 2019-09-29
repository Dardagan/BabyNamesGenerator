document.querySelector ('#generate-names').addEventListener ('submit', loadNames);




//Execute the function to query the API

function loadNames (e) {
	e.preventDefault ();


	//read the values from the form and create the variables
	const country = document.querySelector ('#country').value; //reads the countries
	const genre = document.querySelector ('#genre').value;
	const amount = document.querySelector ('#quantity').value;


	//Build an URL
	let url = 'https://uinames.com/api/?';

	//Read the country and append it to URL
	if (country !== '') { //user have selected country

		url += `region=${country}&`

	console.log (url);

	}

}


