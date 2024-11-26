let GNumber = Math.floor(Math.random() * 10);
let times = 3;
//document.getElementById("ch").innerHTML = times;
function calc() {
  let inputNumber = document.getElementById("numberInput").value;

  console.log(GNumber);
  console.log(GNumber == inputNumber);

  for (let index = 0; index < 1; index++) {
    times--;
    
    if (times == 0) {
        document.getElementById("ch").innerHTML = 0;
       document.getElementById("Answer2").innerHTML = "Game over";
      return;
    }
    if (GNumber == inputNumber && inputNumber != "") {
      document.getElementById("Answer").innerHTML =
        "Answer is correct the Number was : " + inputNumber;
      document.getElementById("numberInput").value = "";
      return;
    } else if (GNumber > inputNumber && inputNumber != "") {
      document.getElementById("Answer").innerHTML = "Your number is  low";
      document.getElementById("numberInput").value = "";
    } else if (GNumber < inputNumber && inputNumber != "") {
      document.getElementById("Answer").innerHTML = "Your number is  High";
      document.getElementById("numberInput").value = "";
    }
    
    
    document.getElementById("ch").innerHTML = times;
  }
}