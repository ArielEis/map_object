/**
 * Created by ariel on 23/01/2017.
 */


var object = createObject();
fillInObject(object);
printDefaultObject(object);
printMapObject(object);





function createObject(){
    var object = {
        array: []
    };

    return object;
}


function fillInObject(object){
    for (var i = 0; i < 10; i++){
        var key = generateKey();
        insertToObject(object,key,i);
    }
}



function insertToObject(object, key, value){
    object[key] = value;
    object.array.push([key, value]);
}



function printDefaultObject(object){
    console.log("Default print");
    for (key in object){
        if (key != 'array'){
            console.log(key + " is: " + object[key]);
        }
    }
    console.log("\n");
}

function printMapObject(object){
    console.log("Map print");
    for (var i = 0; i < object.array.length; i++){
       console.log(object.array[i][0] + " is: " + object.array[i][1]);
    }
    console.log("\n");
}



function generateKey() {
    var key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    return key;
}



