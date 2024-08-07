const main = document.getElementsByTagName('main')[0];
      fbut = document.getElementById('print');
      foot = document.querySelector('.footer');
      // menu= document.getElementsByTagName('header')[0];
const $ = {
    h1: document.getElementsByTagName('h1')[0],
    menu: document.getElementsByTagName('header')[0],
    text: document.getElementsByTagName('textarea')[0],
    drop: document.querySelector('.drop'),
		img: document.getElementById('signature'),
}
const btn = {
    print: document.getElementById('print'),
    start: document.getElementById('start'),
    duration: document.getElementById('duration'),
}

// Function Hall
function just32(a) {
    const remainder = a.length % 32;
    if (remainder !== 0) {
        a.splice(-remainder);
    }
    return a;
}
function toggleHide() {
    for (let key in $) {
        if ($.hasOwnProperty(key)) {
            $[key].classList.add('hide');
        }
    }

}
function extract() {
    const inputText = document.getElementById('inputText').value;
    const regex = /\b\d{5,6}\b/g;
    return just32(inputText.match(regex) || []);
}
function cardGen() {
    const matches = extract();

    // Get the A4 container element
    const a4 = document.createElement('div');
    a4.setAttribute('id', 'a4');
    a4.innerHTML = '';
    const cardsPerPage = 32;
    main.appendChild(a4);

    for (let i = 0; i < matches.length; i += cardsPerPage) {
        const page = document.createElement('div');
        page.className = 'page';

        const pageMatches = matches.slice(i, i + cardsPerPage);
        pageMatches.forEach(number => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img id="card-logo" src="assets/img/logo.png" alt="AMHA logo">
                                <img id="card-wifi" src="assets/img/wifi.png" alt="Wifi icon">
                                <p class="small">AMHA-GUEST</p>
                                <p class="small">Access Code:<span class="heavy"> ${number}</span></p>
                                <p class="small">1 ${btn.duration.value}</span> access for 5 devices</p>`;

            page.appendChild(card);
            // page.appendChild(foot);
        });

        a4.appendChild(page);
    }

}
function printContainer() {
    window.print();
}

// MAIN()
document.addEventListener('click', function (e) {
    console.log(`Click target is ${e.target}`);
    switch (e.target.id) {
        case 'start':
            const matches = extract();
            $.text.classList.add('hidden');
            $.h1.textContent = `Processing ${matches.length} access codes`;
            setTimeout(() => {
                $.h1.textContent = `Press the button to generate the cards`;
                btn.start.classList.add('hide');
                const creat = document.createElement('button');
                creat.setAttribute('id', 'creat');
                creat.textContent = 'Generate';
                main.appendChild(creat);
            }, 1000);
            break;
        case 'creat':
            cardGen();
            toggleHide();
            creat.classList.add('hide');
            break;
        case 'card-logo':
            printContainer();
            break;
        case 'home':
            location.reload();
    }
});
