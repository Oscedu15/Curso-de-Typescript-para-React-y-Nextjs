// ************TODO: ReactNode vs JSX.Element con TypeScript *************
"use client";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  Dispatch,
  JSX,
  SetStateAction,
  useState,
} from "react";

type ButtonProps1 = {
  children: React.ReactNode;
  //Nos permite recibir cualquier tipo de elemento tsx o string
};

const Button1 = ({ children }: ButtonProps1) => {
  return <button>{children}</button>;
};

type ButtonProps2 = {
  children: JSX.Element;
  //Nos permite recibir cualquier tipo de elemento JSX mas no un string
};

const Button2 = ({ children }: ButtonProps2) => {
  return <button>{children}</button>;
};

// ************TODO:Uso de setters con TypeScript *************
type ButtonProps3 = {
  setCount: Dispatch<SetStateAction<number>>;
  //Dispatch<SetStateAction<number | string | boolean >> tipo de typeScript para manejar estados
};

const Button3 = ({ setCount }: ButtonProps3) => {
  return <button onClick={() => setCount(10)}>Text 3</button>;
};

// ************TODO:Uso valores prederteminados de props con TypeScript *************
type ButtonProps4 = {
  title?: string;
  count?: number;
};

const Button4 = ({ title = "Text Here", count = 10 }: ButtonProps4) => {
  return (
    <button>
      {title}, {count}
    </button>
  );
};

//?Interface diferente a type, trabaja es esperando un objeto. type si permite trabajar con una sola variable. Tambien a la hora de combinar diferentes tipos, es mejor con types

// ************TODO:Tipado de props en componentes con TypeScript *************
type LinksProps = ComponentProps<"a">;
//Importamos desde ComponentsProps desde react y luego seleccionamos el tipo de elemento (a, button, img, etc) que vamos a usar. Para despues poder acceder a sus propiedades especificas.

const Link = ({ href, children, className }: LinksProps) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

// ************TODO:Spread Operator en componentes con TypeScript *************
type ButtonProps5 = ComponentPropsWithoutRef<"button">;

const Button5 = ({ onClick, ...rest }: ButtonProps5) => {
  //Podemos tomar unsa sola propiedad y pasar las siguientes todas juntas con el operador Spread, en este caso ...rest
  const handleClick = () => {
    if (onClick) {
      alert("clicked");
    }
  };
  return (
    <button style={rest.style} onClick={handleClick}>
      {rest.children}
    </button>
  );
};

function ReactNodePage() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div className="flex flex-col justify-center gap-y-2">
      <span className="font-semibold text-gray-400 text-center">
        Typescript ReactNode vs JSX.Element
      </span>
      <Button1>
        <span>Texto</span>
      </Button1>
      <Button2>
        <span>Texto2</span>
      </Button2>
      <span className="font-medium text-gray-400 text-center">
        Typescript para uso de manejo de estado (Hooks)
      </span>
      <Button3 setCount={setCount} />
      <Button4 />
      <span className="font-medium text-gray-400 text-center">
        TypeScript de props en componentes
      </span>
      <Link
        href="#"
        className="w-full bg-blue-500 text-white text-center font-semibold py-2 rounded-full"
      >
        Children
      </Link>
      <Button5
        style={{ color: "red" }}
        onClick={() => {
          alert("Hello, world!");
        }}
      >
        Click Me
      </Button5>
    </div>
  );
}

export default ReactNodePage;
