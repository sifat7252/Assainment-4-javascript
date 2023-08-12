function cubeNumber(number) {

    if (typeof number === "number") {
        let result = Math.pow(number, 3);
        return result;
    }
    else {

        return ('please input a number')
    }
}
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));

function canPay(changeArray, totalDue) {

    if (!Array.isArray(changeArray) && (changeArray.length === 0)) {
        return 'please provide a valid array.';
    }
    else {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            let index = i;
            let element = changeArray[index];
            sum = sum + element;
        }
        return sum >= totalDue;

    }
}
// console.log(canPay([1,3,5],10));
// console.log(canPay([1,5,5],10));

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'This is not a string';
    }
    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(matchFinder("john Doe","ohn"));
// console.log(matchFinder("john Doe","ohn"));
// console.log(matchFinder("john Doe","ohn"));
// console.log(matchFinder("john Doe","ohn"));

function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "please input an array with two elements.";
    }
    else {

        const element1 = arr[0];
        const element2 = arr[1];

        if (typeof element1 !== 'number' || typeof element2 !== 'number') {
            return "please input a valid number";
        }
        else if (element1 === element2) {
            return "equal";
        }
        else if (element1 && element2 < 0) {
            return 'Invlid input'
        }
        else if (element2 && element1 > 0) {

            if (element1 > element2) {
                return [element1, element2];
            }
            else if (element2 > element1) {
                return [element2, element1];
            }

        }
    }

}

// console.log(sortMaker([3,2]));
// console.log(sortMaker([4,2]));
// console.log(sortMaker([4,4]));
// console.log(sortMaker([1,2]));
// console.log(sortMaker([4,-2]));


function findAddress(obj) {
    if (typeof obj !== "object") {
        return "please input a object"
    }
    else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";

        // console.log(typeof house)

        return [street, house, society];
        

    }

}

console.log(findAddress({street: 10, house:"15A", society: "Earth Perfect"}));
console.log(findAddress({street: 10, society: "Earth Perfect"}));
console.log(findAddress({street: 10}));