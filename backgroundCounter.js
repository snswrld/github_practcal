var color = ["blue", "red", "green", "pink", "purple", "orange"];
var number = 0;
var colorIndex = 0;
var imgSrc = ["https://chopra.brightspotcdn.com/35/7f/6af0bad84c0fa4134223c8d67986/photo-1458093257227-0f30303eb1f0.jpeg", "https://media.wnyc.org/i/800/0/h/85/1/160924154.jpg", "https://linguaholic.com/linguablog/wp-content/uploads/2020/10/What-Time-is-Evening.jpg.webp", "https://www.indiafellow.org/blog/wp-content/uploads/2017/01/Night.jpeg"]
var date = new Date();
var time = date.getHours();
function plusOne(){
  number += 1;
  colorIndex += 1;
  document.getElementById('number').innerHTML= number;
  document.body.style.backgroundColor=color[colorIndex];
}
function minusOne(){
  if (number != 0) {
    number -= 1;
    colorIndex -= 1;
    document.getElementById('number').innerHTML= number;
    document.body.style.backgroundColor=color[colorIndex];
  }
}
function loadTime() {
  if (5 <= time && time < 10){
  document.getElementById('TOD').innerHTML="Morning!";
  document.getElementById('sky').src=imgSrc[0];
}
  else if (10 <= time && time < 17) {
    document.getElementById('TOD').innerHTML="Afternoon!";
    document.getElementById('sky').src=imgSrc[1];
  }
  else if (17 <= time && time < 20) {
    document.getElementById('TOD').innerHTML="Evening!";
    document.getElementById('sky').src=imgSrc[2];
  }
    else {
      document.getElementById('TOD').innerHTML="Night!";
      document.getElementById('sky').src=imgSrc[3];
    }
  }
  $('body').css({'background-color': 'lightskyblue'});
  $('#sky').animate({opacity:1}, 5000);
