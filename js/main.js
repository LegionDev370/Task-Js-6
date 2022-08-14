let clickButton = document.getElementById("button");
clickButton.addEventListener("click", function () {
  let day = Number(document.getElementById("numberDay").value);
  if (!isNaN(day)) {
    switch (day) {
      case 0:
        alert("It's Sunday!");
        break;
      case 1:
        alert("It's Monday");
        break;
      case 2:
        alert("It's Tuesday");
        break;
      case 3:
        alert("It's Wednesday");
        break;
      case 4:
        alert("It's Thursday");
        break;
      case 5:
        alert("It's Friday");
        break;
      case 6:
        alert("It's Saturday");
        break;
    }
  } if (day <= 0){
    alert("Please greater than zero")
  } 
  else {
    alert("Please enter number only");
  }
});
