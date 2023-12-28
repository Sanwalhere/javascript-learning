//--------------------------------------------------|Speed Checking Function|---------------------------------------------------

function checkSpeed(speed) {
  if (speed <= 70) return "Ok";
  var round = Math.floor(0.2 * Math.floor(speed));
  console.log(round);
  if (speed >= round) return "1 Point";
  if (Math.floor(0.2 * Math.floor(speed)) > 130) return "Suspended";
}
console.log(checkSpeed(85.9));
