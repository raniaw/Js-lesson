var inpDb = document.getElementById("inpDb");
var inpDbVers = document.getElementById("inpDbVers");

var inpFname = document.getElementById("inpFname");
var inpLname = document.getElementById("inpLname");
var inpEmail = document.getElementById("inpEmail");

var btnDb = document.getElementById("btnDb");
var btnAddData = document.getElementById("btnAddData");

btnDb.addEventListener("click", createDb);
btnAddData.addEventListener("click", addData);
var db = null;
const dbName = inpDb.value;
var dbVers = inpDbVers.value;

/**
 * req -> request
 */
function createDb() {
    const dbName = inpDb.value;
    var dbVers = inpDbVers.value;
    var req = indexedDB.open(dbName, dbVers);
    // console.log(req);
    req.onupgradeneeded = function(e) {
        db = e.target.result;
        console.log(`Upgrade is called the DB name ${db.name} with version:${db.version}`);
        //console.log(db)
        //if (!upgradeDb.objectStoreNames.contains('person')) {
        var personObj = db.createObjectStore('person', { keyPath: 'id', autoIncrement: true });

        personObj.createIndex('fname', 'fname', {
            unique: false
        });
        personObj.createIndex('lname', 'lname', {
            unique: false
        });
        personObj.createIndex('email', 'Email', {
            unique: true
        });
        //}
    };

    req.onsuccess = function(e) {
        db = e.target.result;
        console.log(`The DB name ${db.name} with version:${db.version} is opened succesfullly`)
    }
    req.onerror = function(e) {
        db = e.target.result;
        console.log(`error ${e.target.error}`);
    }
}

function addData() {
    //transaction ausführen
    var trObjStore = db.transaction('person', 'readwrite');
    //tabelle 'person' öffnen
    var store = trObjStore.objectStore('person');
    var item = {
        fname: inpFname.value,
        lname: inpLname.value,
        email: inpEmail.value
    }
    store.add(item);
    console.log("added item to the store");

};