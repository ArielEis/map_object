/**
 * Created by ariel on 23/01/2017.
 */


function MapObject(){
    this._array = [];
}

MapObject.prototype.addNewKey = function (key,value) {
    this[key] = value;
    console.log("Key ",key, "was added to object");
    this._array.push([key, value]);
};

MapObject.prototype.removeKey = function (key) {
    if (this[key] !== undefined){
        delete this[key];
        var id = getIndexOfArray(this._array, key);
        this._array.splice(id, 1);
    }
};

MapObject.prototype.printMapObject = function (){
    console.log("\n");
    if (this._array.length > 0 ){
        for (var i = 0; i < this._array.length; i++){
            console.log(this._array[i][0] + " is: " + this._array[i][1]);
        }
    } else {
        console.log("Object are empty");
    }

};



var myObject = createAnObject();
fillKeysInObject(myObject);
myObject.addNewKey('key5' , 11);
myObject.addNewKey('key6' , 12);
myObject.printMapObject();
myObject.removeKey('key5');
myObject.printMapObject();




function fillKeysInObject(object){
    for (var i = 0; i < 10; i++){
        var key = generateKey();
        object.addNewKey(key,i);
    }
}


function createAnObject(){
    var mapObject = new MapObject();
    return mapObject;
}



function generateKey() {
    var key = Math.random().toString(36).replace(/[^0-z]+/g, '').substr(0, 5);
    return key;
}

function getIndexOfArray(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i][0] === value){
            return i;
        }
    }
}



