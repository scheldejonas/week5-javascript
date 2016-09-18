//@author Thomas Hartmann - tha@cphbusiness.dk created on Aug 30, 2016 
window.onload = function () {
    var doctors = [
        {"no": 101, "name": "Fredrikke Nielsen", "age": 45, "yearsOfWork": 15},
        {"no": 102, "name": "Peter Holst", "age": 54, "yearsOfWork": 26},
        {"no": 103, "name": "Karen Ro", "age": 37, "yearsOfWork": 13},
        {"no": 104, "name": "Albert Frisk", "age": 83, "yearsOfWork": 54},
        {"no": 105, "name": "Kurt Dahl", "age": 38, "yearsOfWork": 12},
        {"no": 106, "name": "Flemming Fig", "age": 34, "yearsOfWork": 2},
        {"no": 107, "name": "Karen Stur", "age": 27, "yearsOfWork": 1}
    ];
    doctors = doctors.filter(function (doctor) {
        return doctor.yearsOfWork > 10; // if truthy then keep item
    }).map(function (doctor) {
        return {// return what new object will look like
            doctorNumber: "#" + doctor.no,
            name: doctor.name,
            ageWhenStarted: doctor.age - doctor.yearsOfWork
        };
    });
    for (var i = 0; i < doctors.length; i++) {
        console.log(doctors[i]);
    }
    
};
var myMapFunction = function(inputArray, myCallback){
    //some code in here ..... 
};



