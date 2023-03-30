function shout(string) {
    //todo
    return string.toUpperCase(); //'HELLO!'
}

function whisper(string) {
    return string.toLowerCase(); //'hello!'
}

function logShout(string) {
    console.log(string.toUpperCase()); //'HELLO!'
}

function logWhisper(string) {
    console.log(string.toLowerCase()); //'hello!'
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
} else if (string ===string.toUpperCase()) {
    return "YES INDEED!";
} else if (string === "Let's have dinner together!") {
    return "I would love to!";
}
}
