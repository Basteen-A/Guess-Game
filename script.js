var guessnumber = document.getElementById("gn");
        var result = document.getElementById("result");
        var randomnumber = Math.floor(Math.random() * 10) + 1;
        var score = document.getElementById("score");
        var totalscore = 50;

        function guess() {
            var enterednumber = guessnumber.value;
            if (randomnumber == enterednumber) {
                console.log("Wow you're right Fantastic!!");
                result.textContent = "Right";
                alert("You won!");
                totalscore = totalscore + 1;
                score.textContent = "Score = " + totalscore;
            } else {
                console.log("Aww that's wrong");
                result.textContent = "Wrong";
                alert("Wrong guess, try again!");
                totalscore = totalscore - 1;
                score.textContent = "Score = " + totalscore;
            }
        }