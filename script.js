// Do not remove this line
const sprompt = require("syncprompt");

do {
    let selection = sprompt("Whaddya want?!" );
    console.log(`FINE. You can ${selection}`);
} while (selection != "q");