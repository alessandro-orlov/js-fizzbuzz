// Scrivi un programma che stampi i numeri da 1 a 100,
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var onScreen = document.getElementById('on-screen');

//Loop while (Working fine)
var i = 1;
while (i <= 100) {
  //Multipli di 3 e 5 = FizzBuzz
  if( (i % 3 == 0) && (i % 5 == 0) ) {

    onScreen.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
  }

  //Multipli di 5 = Buzz
  else if( i % 5 == 0 ) {

    onScreen.innerHTML +=  '<li>' + 'Buzz' + '</li>';
  }

  //Multipli di 3 Fizz
  else if( i % 3 == 0 ) {
    onScreen.innerHTML += '<li>' + 'Fizz' + '</li>';
  }

  else {
    onScreen.innerHTML +=  '<li>' + i + '</li>';
  }

  //Interuzione del ciclo
  i++
}

// // Loop for() - also working
// for(var i = 1; i <= 100; i++ ) {
//   //Multipli di 3 = Fizz
//   if ( (i % 3 == 0 ) && (i % 5 == 0) ) {
//     onScreen.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
//   }
//   //Multipli di 5 = Buzz
//   else if ( i % 5 == 0 ) {
//     onScreen.innerHTML += '<li>' + 'Buzz' + '</li>';
//   }
//   //Multipli di 3 e di 5 = FizzBuzz
//   else if ( i % 3 == 0 ) {
//     onScreen.innerHTML += '<li>' + 'Fizz' + '</li>';
//   }
//   else {
//     onScreen.innerHTML += '<li>' + i + '</li>';
//   }
// }
