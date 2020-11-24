function handler(inputs) {
    console.log("Handler running ...");
    console.log("Input: ", JSON.parse(inputs));
    throw("Expected Error");
}

handler(process.argv[2]);