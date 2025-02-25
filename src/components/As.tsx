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

function AsPage() {
  console.log(colors[0]);

  const inputElement = document.getElementById("username") as HTMLInputElement;

  // console.log(inputElement)
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
