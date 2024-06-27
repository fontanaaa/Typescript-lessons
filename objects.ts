type MyObj = {
    a: number;
    b: number;
    c: string;
};

interface MyObject {
    readonly a: number;
    b: number;
    c?: string;
    // если будут еще ключи
    [key: string]: string | number | undefined;
}

const obj: MyObj = { a: 1, b: 2, c: "asd" };

const obj2: MyObject = {
    a: 1,
    b: 4,
};

obj2.b = 23;

interface IPerson {
    name: string;
}

interface IPerson {
    age: number;
}

interface IAccount {
    email: string;
    login: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level: string;
}

const john: IDeveloper = {
    name: "John",
    age: 30,
    email: "john@dd.ru",
    login: "John_the",
    active: true,
    skills: ["clever", "dfdf"],
    level: "middle",
};
