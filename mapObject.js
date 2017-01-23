/**
 * Created by ariel on 23/01/2017.
 */


function MapObject(){
    this._array = [];
}


MapObject.prototype.fillKeysInObject = function (){
    for (var i = 0; i < 10; i++){
        var key = generateKey();
        this.insertKeyToObject(key,i);
    }
};


MapObject.prototype.insertKeyToObject = function (key, value){
    this[key] = value;
    this._array.push([key, value]);
};


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
myObject.fillKeysInObject();
myObject.printMapObject();




function createAnObject(){
    var mapObject = new MapObject();
    return mapObject;
}


function generateKey() {
    var key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    return key;
}



