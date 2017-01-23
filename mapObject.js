/**
 * Created by ariel on 23/01/2017.
 */


function MapObject(){
    this._array = [];
}

MapObject.prototype.printMapObject = function (){
    if (this._array.length > 0){
        for (var i = 0; i < this._array.length; i++){
            console.log(this._array[i][0] + " is: " + this._array[i][1]);
        }
    }else{
        console.log("Object are empty");
    }

};



var myObject = createAnObject();
fillKeysInObject(myObject);
myObject.printMapObject();





function fillKeysInObject(object){
    for (var i = 0; i < 10; i++){
        var key = generateKey();
        insertKeyToObject(object,key,i);
    }
}


function insertKeyToObject(object,key, value){
    object[key] = value;
    object._array.push([key, value]);
}




function createAnObject(){
    var mapObject = new MapObject();
    return mapObject;
}


function generateKey() {
    var key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    return key;
}



