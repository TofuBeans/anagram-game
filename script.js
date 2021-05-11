function scrambleWord(wrd) {
    var newWrd = "";
    var wrdList = wrd.split('');
    for (var i=0; i < wrdList.length; i++) {
        var j = Math.floor(Math.random() * wrdList.length)
        var temp = wrdList[j];
        wrdList[j] = wrdList[i];
        wrdList[i] = temp;
    }
    for (var i=0; i < wrdList.length; i++) {
        newWrd += wrdList[i];
    }
    return newWrd;
}
        
var words = [
    "academy",
    "computing",
    "programming",
    "book",
    "worm",
    "chicken",
    "goat",
    "sheep",
    "avocado",
    "potato",
    "javascript",
    "jquery",
    "minecraft",
    "roblox",
    "tutorial",
]

var wordIndex = 0;
var scrambledWord = "";
var unscrambledWord = "";

function restartGame() {
    wordIndex = Math.floor(Math.random() * words.length);
    scrambledWord = scrambleWord(words[wordIndex]);
    
    unscrambledWord = words[wordIndex];
    
    $(".scrambled").text(scrambledWord);
}

restartGame();

var $form = $("#anagram-form");
var $result = $("#result");
$form.on("submit", function(event) {
    event.preventDefault();
    var $answer = $("#input");
    if ($answer.val() != "") {
        if ($answer.val().toLowerCase() === unscrambledWord) {
            $result.text("Correct!");
            $result.css("color","green");
            restartGame()
        } else {
            $result.text("Incorrect!");
            $result.css("color","red");
        }
        $answer.val("");
    } else {
        $result.text("Check the answer to see the result.");
        $result.css("color","black");
    }
});