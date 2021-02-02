import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './css/styles.css';
import Journal from './journal.js';
$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    const textEntry = $('#textOne').val();
    console.log(textEntry);
    // const length2 = $('#length2').val();
    // const length3 = $('#length3').val();
    const journal = new Journal("my JOurnal", textEntry)
    journal.gimmeAte();
    // $('#response').append("<p>" + response + "</p>");
  });
});