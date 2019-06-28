var text = "<table>";
for (let i = 1; i < 13; i++) {
    
    for (let j = 1; j < 13; j++) {
        text += "<td>" + (i * j);
    }
    text += "<tr>";
}
text += "<table>";

function assignGrade(pre) {
    if (pre > 89) {
        var a = 'grade is A'
    } else if (pre < 90 & pre > 81) {
        var a = 'grade is B'
    } else if (pre < 80 & pre > 71) {
        var a = 'grade is C'
    } else if (pre < 70 & pre > 66) {
        var a = 'grade is D'
    } else {
        var a = 'grade is F'
    }
    return a;
}
var msg = "";
for (let i = 88; i < 99; i++) {
    msg += 'For ' + i + ', you got a ' + assignGrade(i) + "<br>";
}
document.getElementById("one").innerHTML = text;
document.getElementById("output").innerHTML = msg;
