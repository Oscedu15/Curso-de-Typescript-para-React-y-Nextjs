"use client";

import { ComponentPropsWithoutRef, MouseEvent } from "react";

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
    </div>
  );
}

export default IntersectionsPage;
