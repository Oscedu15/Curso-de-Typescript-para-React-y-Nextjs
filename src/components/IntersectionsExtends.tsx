"use client";

import { ComponentPropsWithoutRef, MouseEvent, useRef, useState } from "react";

// ************TODO:Intersections y Extends   *************

//Ejemplo con Type
type Props = ComponentPropsWithoutRef<"button">;

type ButtonProps1 = Props & {
  dark?: boolean;
  variant?: "primary" | "secondary";
};

const Button1 = ({ variant, type, children }: ButtonProps1) => {
  return <button type={type}>{children}</button>;
};

//Ejemplo con interface
interface Agregado extends ComponentPropsWithoutRef<"button"> {
  dark?: boolean;
  variant?: "primary" | "secondary";
}

interface AgregadoButtonsProps extends Agregado {
  url: string;
}

const Button2 = ({ variant, type, children, url }: AgregadoButtonsProps) => {
  return (
    <button type={type}>
      {children}
      {url}
    </button>
  );
};

// ************TODO: Event Handlers  con TypeScript  *************

type ButtonProps3 = ComponentPropsWithoutRef<"button"> & {};

const Button3 = ({}: ButtonProps3) => {
  function handleClick(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    if (e) {
      alert("Funciono!!!");
    }
  }
  return <button onClick={handleClick}>Event Handlers</button>;
};

// ************TODO: Tipado de Hooks con TypeScript  *************

type User = {
  name?: string;
  age?: number;
};

const Button4 = ({}: User) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Button");
  const [active, setActive] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const myButton = useRef<HTMLButtonElement>(null);

  console.log(user?.age);
  console.log(user?.name);

  //myButton.current.
  return <button ref={myButton}>Tipado de Hooks</button>;
};

// ************TODO: Utility Types con TypeScript  *************

type User2 = {
  nombre?: string;
  edad?: number;
  correo?: string;
  clave: string;
};

//#1
type UserWithoutPassword = Omit<User2, "clave">;
//Omit nos permite omitir propiedades ya existente dentro de un tipo.

//#2
type UpdateUser = Partial<User2>;
//Con Partial nos permite poner opcional todas las propiedades de un tipo

//#3
type UserPublicData = Pick<User2, "nombre" | "correo">;
//Pick nos permite seleccionar las propiedades que queremos usar de un tipo ya existente

//#4
type OptionalUserWithOutPassword = Partial<Omit<User2, "correo">>;
//Podemos usar varios Utility Types Juntos

type Status = "active" | "inactive" | "pending";

//#5
type AllowedStatus = Exclude<Status, "inactive" | "pending">;
//Exlude nos permite excluir propiedades declaradas de otros tipos

const Button5 = () => {
  const [user, setUser] = useState<User2 | null>(null);
  const myButton = useRef<HTMLButtonElement>(null);

  //#1
  function senData() {
    const user: UserWithoutPassword = {
      correo: "email",
      edad: 25,
      nombre: "Oscar",
    };
  }

  //#2
  function updateUser(user: UpdateUser) {}

  return <button>Utility Types</button>;
};

function IntersectionsPage() {
  return (
    <div className="flex flex-col justify-center gap-y-2">
      <span className="font-semibold text-gray-600 text-center">
        Typescript Intersections y Extends
      </span>
      <Button1 type="submit">primary</Button1>
      <Button2 type="submit" url="www.examples.com">
        secondary
      </Button2>
      <span className="font-medium text-gray-400 text-center">
        Event Handlers con TypeScript
      </span>
      <Button3 />
      <Button4 />
      <span className="font-medium text-gray-400 text-center">
        Utility Types
      </span>
      <Button5 />
    </div>
  );
}

export default IntersectionsPage;
