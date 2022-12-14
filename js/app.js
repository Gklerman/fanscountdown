
// Set the date we're counting down to
var countDownDate = new Date("Aug 18, 2024 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //document.getElementById("clock").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);

/*$.getJSON("https://freegeoip.net/json/", function(data) {
    let country = data.country_name;
    let city = data.city;
    let ip = data.ip;
    let cc = "flag-icon flag-icon-" + data.country_code.toLowerCase();

    $('#con').text(country);
    $('#cit').text(city);
    $('#ip').text(ip);
    $('#flag').addClass(cc);
});*/



const langEl = document.querySelector('.lang-wrap');
const link = document.querySelectorAll('a');
const subtitleEl = document.querySelector('.subTitle');
const daysEl = document.querySelector('.days');
const hrsEl = document.querySelector('.hrs');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');
const firstParEl = document.querySelector('.firstPar');
const secondParEl = document.querySelector('.secondPar');
const thirdParEl = document.querySelector('.thirdPar');

link.forEach(element => {
    element.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        element.classList.add('active');

        const attr = element.getAttribute('language');

        subtitleEl.textContent = data[attr].subTitle;
        daysEl.textContent = data[attr].days;
        hrsEl.textContent = data[attr].hrs;
        minEl.textContent = data[attr].min;
        secEl.textContent = data[attr].sec;
        firstParEl.textContent = data[attr].firstPar;
        secondParEl.textContent = data[attr].secondPar;
        thirdParEl.textContent = data[attr].thirdPar;
    });    
});

var data = {
    "english": {
        "subTitle": `second season starts in:`,
        "days": `days`,
        "hrs": `hours`,
        "min": `minutes`,
        "sec": `seconds`,
        "firstPar": `The countdown will be updated when the premiere date of the second season is announced.`,
        "secondPar": `The date taken for the end of the countdown is August 18, 2024.`,
        "thirdPar": `The first season began on August 21. If the second season starts filming in April 2023, it would be premiering on HBO 15 months later, that is, July or August 2024.`
    },
    "spanish": {
        "subTitle": `La segunda temporada comienza en:`,
        "days": `d??as`,
        "hrs": `horas`,
        "min": `minutos`,
        "sec": `segundos`,
        "firstPar": `La cuenta regresiva se actualizar?? cuando se anuncie la fecha de estreno de la segunda temporada.`,
        "secondPar": `La fecha tomada para la finalizaci??n de la cuenta regresiva es 18 de Agosto de 2024.`,
        "thirdPar": `La primera temporada comenz?? el 21 de Agosto. Si la segunda temporada comienza a filmarse en Abril de 2023, se estar??a estrenando en HBO 15 meses despu??s, es decir, Julio o Agosto de 2024.`
    },
    "portuguese": {
        "subTitle": `segunda temporada come??a em:`,
        "days": `dias`,
        "hrs": `horas`,
        "min": `minutos`,
        "sec": `segundos`,
        "firstPar": `A contagem regressiva ser?? atualizada quando a data de estreia da segunda temporada for anunciada.`,
        "secondPar": `A data tomada para o final da contagem regressiva ?? 18 de agosto de 2024.`,
        "thirdPar": `A primeira temporada come??ou em 21 de agosto. Se a segunda temporada come??ar a ser filmada em abril de 2023, ela estrear?? na HBO 15 meses depois, ou seja, julho ou agosto de 2024.`
    },
    "french": {
        "subTitle": `la deuxi??me saison commence dans:`,
        "days": `jours`,
        "hrs": `heures`,
        "min": `minutes`,
        "sec": `secondes`,
        "firstPar": `Le compte ?? rebours sera mis ?? jour lorsque la date de premi??re de la deuxi??me saison sera annonc??e.`,
        "secondPar": `La date retenue pour la fin du compte ?? rebours est le 18 ao??t 2024.`,
        "thirdPar": `La premi??re saison a commenc?? le 21 ao??t. Si la deuxi??me saison commence ?? tourner en avril 2023, elle sera diffus??e sur HBO 15 mois plus tard, c'est-??-dire en juillet ou ao??t 2024.`
    },
    "german": {
        "subTitle": `zweite Staffel startet in:`,
        "days": `tage`,
        "hrs": `stunden`,
        "min": `minuten`,
        "sec": `sekunden`,
        "firstPar": `Der Countdown wird aktualisiert, wenn das Premiere-Datum der zweiten Staffel bekannt gegeben wird.`,
        "secondPar": `Das Datum f??r das Ende des Countdowns ist der 18. August 2024.`,
        "thirdPar": `Die erste Staffel begann am 21. August. Wenn die Dreharbeiten f??r die zweite Staffel im April 2023 beginnen, w??rde sie 15 Monate sp??ter, also im Juli oder August 2024, auf HBO Premiere haben.`
    },
    "italian": {
        "subTitle": `la seconda stagione inizia tra:`,
        "days": `giorni`,
        "hrs": `ore`,
        "min": `minuti`,
        "sec": `secondi`,
        "firstPar": `Il conto alla rovescia verr?? aggiornato quando verr?? annunciata la data della prima della seconda stagione.`,
        "secondPar": `La data presa per la fine del conto alla rovescia ?? il 18 agosto 2024.`,
        "thirdPar": `La prima stagione ?? iniziata il 21 agosto. Se le riprese della seconda stagione iniziassero nell'aprile 2023, sarebbero state presentate in anteprima su HBO 15 mesi dopo, ovvero luglio o agosto 2024.`
    }
}