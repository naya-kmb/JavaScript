function calculateAverage() {
    // create references to elements
    var inName = document.getElementById("inName");
    var inGrade1 = document.getElementById("inGrade1");
    var inGrade2 = document.getElementById("inGrade2");
    var outSituation = document.getElementById("outSituation");
    var outAverage = document.getElementById("outAverage");

    // retrieve values
    var Name = inName.value;
    var Grade1 = Number(inGrade1.value);
    var Grade2 = Number(inGrade2.value);

    // calculate average
    var Average = (Grade1 + Grade2) / 2;

    // display average
    outAverage.textContent = "Average Grades: " + Average.toFixed(1);

    // condition
    if (Average >= 5) {
        outSituation.textContent = "Congratulations, " + Name + "! You passed.";
        outSituation.style.color = "pastelblue";
    } else {
        outSituation.textContent = "Oh, " + Name + ", you didn't pass, your bastard.";
        outSituation.style.color = "darkred";
    }
}

// button reference
var btResult = document.getElementById("btResult");

// event
btResult.addEventListener("click", calculateAverage);