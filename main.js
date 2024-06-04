// Elements Query
const start = document.getElementById('start'),
      print = document.getElementById('print'),
			duration = document.getElementById('duration'),
			access = document.getElementById('access');

function extractNumbers() {
    // Get the input text
    const inputText = document.getElementById('inputText').value;

    // Regular expression to match numbers with 5 to 6 digits
    const regex = /\b\d{5,6}\b/g;

    // Find all matches
    const matches = inputText.match(regex) || [];

    // Get the A4 container element
    const a4Container = document.getElementById('a4Container');

    // Clear any existing cards
    a4Container.innerHTML = '';

    // Populate the container with cards
    matches.forEach(number => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="./assets/img/wifi.png" alt="Wifi icon">
	  <img src="./assets/img/logo.png" alt="AMHA logo">
	  <div class="data">
			<p class="label">Network Name:</p>
			<p>AMHA-GUEST</p>
	  </div>
		<div class="data">
			<p class="label">Password:</p>
	 		<p id="password">${number}</p>
		</div>
		<p>1<span id="access">${duration.value}</span> access for 5 devices</p>`;
        a4Container.appendChild(card);
    });

    // Optional: Log the matches array to the console
    console.log(matches);
}

function printContainer() {
    window.print();
}


// MAIN()
start.addEventListener('click', extractNumbers);
print.addEventListener('click', printContainer);
