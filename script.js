function calc25() {
    var input1 = document.getElementById("bronzePlan").value;
    var percentToGet1 = 25;
    var percent = (percentToGet1 / 100) * input1;
    console.log(percent)
    document.getElementById("sol25").value = percent;
}

function calc60() {
    var input1 = document.getElementById("silverPlan").value;
    var percentToGet1 = 60;
    var percent = (percentToGet1 / 100) * input1;
    console.log(percent)
    document.getElementById("sol60").value = percent;
}

function calc85() {
    var input1 = document.getElementById("goldPlan").value;
    var percentToGet1 = 85;
    var percent = (percentToGet1 / 100) * input1;
    console.log(percent)
    document.getElementById("sol85").value = percent;
}

function clickAlert() {
    alert("Withdraw not approved");
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "respopnsive";
    } else {
        x.className = "topnav";
    }
}