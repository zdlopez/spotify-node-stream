var form = document.getElementsByTagName("form")[0],
    input = document.getElementsByTagName("input")[0];

form.addEventListener("submit", function (event) {
  var audio = new Audio;
  audio.src = "/audio/" + input.value;
  audio.autoplay = true;
  audio.controls = true;
  event.preventDefault();
});
