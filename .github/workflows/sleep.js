function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 
function handler(inputs) {
    console.log("Handler running ...");
    console.log("Input: ", JSON.parse(inputs));
    var input = JSON.parse(inputs);
    sleep(input.seconds*1000);
    console.log("Handler complete");
}

handler(process.argv[2]);