// Elements Query
const start = document.getElementById('start'),
      print = document.getElementById('print'),
      duration = document.getElementById('duration'),
      access = document.getElementById('access'),
      main = document.getElementById('main'),
      box = document.getElementById('inputText'),
      home = document.querySelector('.i-amha'),
      btn = document.querySelector('.btn'),
      pri = document.querySelector('.i-printer'),
      h1 = document.getElementsByTagName('h1')[0];

function extractNumbers() {

    const inputText = document.getElementById('inputText').value;

    const regex = /\b\d{5,6}\b/g;

    const matches = inputText.match(regex) || [];

    const a4 = document.createElement('div');
    a4.setAttribute('id', 'a4');
    a4.classList.add('a4-print');

    a4.innerHTML = '';

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
		<p>1 <span id="access">${duration.value}</span> access for 5 devices</p>`;
        start.classList.add('hidden');
        box.classList.add('hidden')
        btn.classList.add('hidden');
        h1.classList.add('hidden');
        print.classList.remove('hidden');
        main.appendChild(a4);
        a4.appendChild(card);
    });

    // Optional: Log the matches array to the console
    console.log(matches);
}

function printContainer() {
    window.print();
}


// MAIN()
document.addEventListener('click', function (e) {
    console.log(e.target);
});
start.addEventListener('click', extractNumbers);
document.addEventListener('click', function (e) {
    if (e.target === pri || e.target === print) {
        printContainer();
    }
});
home.addEventListener('click', function () {
    box.value = '';
    location.reload();
    console.log(`Hello, ${box.value}`);
});
