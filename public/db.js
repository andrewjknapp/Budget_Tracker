let db;

const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
    const updatedDB = event.target.result;
    updatedDB.createObjectStore("pending", { autoIncrement: true });
};