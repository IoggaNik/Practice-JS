function level1And8() {
    function task1() {
        const arr = [];
        for (let i = 1; i < 11; i++) {
            arr.push(i)
        }
        console.log(arr);
    }

    function task2() {
        const arr = [];
        for (let i = 1; i < 101; i++) {
            arr.push(i)
        }

        const newArr = arr.filter(num => num % 2 == 0);

        console.log(newArr);
    }

    function task3() {
        const arr = [1.456, 2.125, 3.32, 4.1, 5.34];

        const newArr = arr.map(num => Math.round(num));

        console.log(newArr);
    }
}

function level1And9() {
    function task1() {
        const arrStr = ['hello', 'http://github.com', 'http://stackowerflow.com', 'apple', 'strawberry'];

        const newArr = arrStr.filter(str => str.includes('http://'));

        console.log(newArr);
    }

    function task2() {
        const arrStr = ['hello.html', 'github.com', '21vek.by', 'apple.html', 'strawberry'];

        const newArr = arrStr.filter(str => str.includes('html'));

        console.log(newArr);
    }

    function task3() {
        const arr = [2, 5, 3, 9, 7];

        const newArr = arr.map(num => num + (num * 10) / 100);

        console.log(newArr);
    }
}

function level1And10() {
    function task1() {
        const arr = [];
        for (let i = 1; i < 101; i++) {
            arr.push(Math.floor(Math.random() * i));
        }
        console.log(arr);
    }

    function task2() {
        const num = 12345;

        const newNum = num
            .toString()
            .split('')
            .reverse();

        const newArrNums = newNum.map(num => +num);

        for (let i = 0; i < newArrNums.length; i++) {
            console.log(newArrNums[i]);
        }
    }

    function task3() {
        const arr = [1, 2, 3, 4, 5, 6];

        const str = arr.join('');

        const arr1 = str.slice(0, 2).split('').map(num => +num),
            arr2 = str.slice(2, 4).split('').map(num => +num),
            arr3 = str.slice(4, 6).split('').map(num => +num);

        console.log(arr1, arr2, arr3);
    }

    function task4() {
        const arr1 = [1, 2, 3],
            arr2 = [4, 5, 6];

        const str1 = arr1.join(''),
            str2 = arr2.join('');

        const newStr = str1 + str2;

        const newArr = newStr
            .split('')
            .map(str => +str);

        console.log(newArr);
    }
}

function level2And1() {
    function task1() {
        const str = 'f20lk0';
        console.log(str.indexOf('0'));
    }

    function task2() {
        for (let i = 1; i < 1001; i++) {
            console.log(i += 4);
        }
    }

    function task3() {
        const arr = [1, 2, 3, 4, 5, 6];

        while (true) {
            if (arr.length == 0) {
                break
            }
            arr.forEach(num => {
                arr.pop(num)
            })
        }

        console.log(arr);
    }

    function task4() {
        const arr = [1, 2, 3, 4, 5, 6];
        const newArr = arr.slice(0, 3);

        const result = newArr.reduce((prev, num) => prev + num, 0);
        console.log(result);
    }
}

function level2And2() {
    function task1() {
        const arr = [2, 5, -9, 4, -2, -4];
        const newArr = arr.filter(num => num < 0);
        console.log(newArr.length);
    }

    function task2() {
        const arr = [2, 5, -9, 4, -2, -4];
        const newArr = arr.filter(num => num > 0);
        console.log(newArr);
    }

    function task3() {
        let str = 'string';
        const lastSymbol = str[str.length - 1];
        str = str.slice(0, -2);
        str = str.split('');
        str = [...str, lastSymbol].join('');
        console.log(str);
    }

    function task4() {
        const arr = [1, 2, 3, 4, 5, 6];

        const arrNums1 = arr.slice(0, 3);
        const arrNums2 = arr.slice(3, 6);

        function sumArr(arr) {
            return arr.reduce((prev, num) => prev + num, 0);
        }

        const value1 = sumArr(arrNums1);
        const value2 = sumArr(arrNums2);

        const result = value1 / value2;

        console.log(result);
    }
}