function findAverage() {
    var firstParameter = document.getElementsByName("performanceRating"),
        performanceStar = 0;
    for (var i = 0; i < firstParameter.length; i++) {
        if (firstParameter[i].checked) {
            performanceStar = parseFloat(firstParameter[i].value);
        }
    }
	var secondParameter = document.getElementsByName("clarityRating"),
        clarityStar = 0;
    for (var i = 0; i < secondParameter.length; i++) {
        if (secondParameter[i].checked) {
            clarityStar = parseFloat(secondParameter[i].value);
        }
    }
    var averageStar = (performanceStar + clarityStar) / 2;
    alert(averageStar + " is the average rating")
	for (var i = 0; i < averageStar-0.5; i++) {
        document.getElementById("star" + i).style.color = "#FF0";
    }
}
