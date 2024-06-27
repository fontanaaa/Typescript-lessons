// списки
const arr = ["a", "b", "c"];

let el = arr[0];

// 2 вида обозначений
const arr1: number[] = [1, 4, 5];
const arr2: Array<number> = [1, 4, 3];

// вложенные массивы, массив строк, как элемент массива
const arr3: string[][] = [];
arr3.push(["a", "b"]);

type MyType = string | number;
const arr4: MyType[] = [];

// кортежи (tuple)
const tuple1: [string, boolean, number] = ["abc", true, 0];
