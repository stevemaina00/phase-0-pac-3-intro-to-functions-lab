function shout(string) {
    return string.toUpperCase();
    
}
function whisper(string){
    return string.toLowerCase();
}

const spy =logShout("Hello");
function logShout(string){
    console.log(string.toUpperCase());

}
logShout(string);
const spyOn= logWhisper("HELLO");
function logWhisper(string){
    console.log(string.toLowerCase());
}
logWhisper(string);



function sayHiToHeadphonedRoommate (Hello) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (Hello.toLowerCase(Hello) === Hello) {
      return cantUnswer;
    }
    else if (Hello.toUpperCase(Hello) === Hello) {
      return yesUnswer;
    }
    else if ("Let's have dinner together" === lovUnswer) {
      return lovUnswer
    }
  }









