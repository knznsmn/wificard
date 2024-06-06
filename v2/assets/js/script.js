const main = document.getElementsByTagName('main')[0];
      fbut = document.getElementById('print');
      foot = document.querySelector('.footer');
      // menu= document.getElementsByTagName('header')[0];
const $ = {
    h1: document.getElementsByTagName('h1')[0],
    menu: document.getElementsByTagName('header')[0],
    text: document.getElementsByTagName('textarea')[0],
    butt:document.getElementsByTagName('button')[0],
    drop: document.querySelector('.drop'),
}
const btn = {
    print: document.getElementById('print'),
    start: document.getElementById('start'),
    duration: document.getElementById('duration'),
}
function toggleHide() {
    for (let key in $) {
        if ($.hasOwnProperty(key)) {
            $[key].classList.add('hide');
        }
    }
    fbut.classList.remove('hide');fbut.classList.remove('hide');
}
function extractNumbers() {
    const inputText = document.getElementById('inputText').value;
    const regex = /\b\d{5,6}\b/g;
    const matches = inputText.match(regex) || [];

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
                                <p class="small">AMHA-GUEST</p>
                                <p class="heavy">Access Code: ${number}</p>
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
            extractNumbers();
            toggleHide();
            break;
        case 'card-logo':
            printContainer();
            break;
        case 'home':
            location.reload();
    }
});