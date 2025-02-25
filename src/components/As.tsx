"use client";
// ************TODO:Uso de "as" en TypeScript *************

let someValue: unknown = "Hello String";
//Unknown es para decirle que desconocemos el tipo de datos que vamos a recibir

let stringLength = (someValue as string).length;
//Con as le estamos diciendo que trate a someValue como un string y poder usar las propiedades perteneciente a el

type User = {
  id: number;
  name: string;
};

let users: unknown = {
  id: 1,
  name: "Oscar",
};

const newUser = users as User;

const colors = ["red", "blue", "yeloow"] as const;
//Es una propiedad de solo lectura, no nos permite hacer modificaciones

let num: number = 123;
let str = num as unknown as string;

// console.log(str.toLocaleLowerCase);

// ************TODO:Introducción a Generics  en TypeScript *************
//***** */Ej:1
function identity<T>(value: T) {
  //Declaramos primero la funcion, el type, la const o la interface y ene vez de pasarle el tipo de datos con el que vamos a trabajar, le colocamos una T en mayuscula, los que nos permite enviarle el tipo de datos que vayamos a usar junto con los parametros mas adelante a la hora de ejecutar.
  return value;
}

//***** */Ej:2
interface Box<T> {
  content: T;
}

const box1: Box<string> = { content: "hello" };
const box2: Box<number> = { content: 123 };
const box3: Box<boolean> = { content: true };

//***** */Ej:3
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

getFirstElement([1, 2, 3]);
getFirstElement(["hello", "world"]);
getFirstElement([true, false]);

//***** */Ej:4
type ApiResponse<T> = {
  status: number;
  data: T;
};

const response1: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Jhon", age: 30 },
};

const response2: ApiResponse<string> = {
  status: 200,
  data: "Hello World",
};

const response3: ApiResponse<string[]> = {
  status: 200,
  data: ["hello", "world"],
};

function AsPage() {
  console.log(colors[0]);

  const inputElement = document.getElementById("username") as HTMLInputElement;

  // console.log(inputElement)

  //**************?Ej:1
  identity<string>("hello");
  identity<number>(1);
  identity<boolean>(true);

  return (
    <div className="flex flex-col justify-center gap-y-2">
      <span className="font-bold text-2xl text-gray-300 text-center">
        Typescript uso de As
      </span>
      <input type="number" name="" id="username" />
    </div>
  );
}

export default AsPage;
