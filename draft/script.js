const start = document.getElementById('start'),
    print = document.getElementById('print'),
    duration = document.getElementById('duration'),
    access = document.getElementById('access'),
    main = document.getElementById('main'),
    box = document.getElementById('inputText'),
    btn = document.querySelector('.btn'),
    h1 = document.getElementsByTagName('h1')[0];

function extractNumbers() {
    // Get the input text
    const inputText = document.getElementById('inputText').value;

    // Regular expression to match numbers with 5 to 6 digits
    const regex = /\b\d{5,6}\b/g;

    // Find all matches
    const matches = inputText.match(regex) || [];

    // Get the A4 container element
    const a4Container = document.getElementById('a4Container');

    // Clear any existing cards/pages
    a4Container.innerHTML = '';

    // Define the maximum number of cards per page
    const cardsPerPage = 30; // Adjust this based on card and page size

    // Create pages and populate with cards
    for (let i = 0; i < matches.length; i += cardsPerPage) {
        const page = document.createElement('div');
        page.className = 'page';

        const pageMatches = matches.slice(i, i + cardsPerPage);
        pageMatches.forEach(number => {
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
		<p>1 <span id="access">${duration.value}</span> access for 5 devices</p>`;
            page.appendChild(card);
        });

        a4Container.appendChild(page);
    }

    // Optional: Log the matches array to the console
    console.log(matches);
}

function printContainer() {
    window.print();
}
