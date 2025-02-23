"use client";
// ************TODO: Arrays con TypeScript *************

type ButtonProps1 = {
  text?: string;
  padding: number[];
  nombres: [string, string, number, string?];
};

const Button1 = ({ text, padding, nombres }: ButtonProps1) => {
  return (
    <button>
      <span className="text-red-400">{text}</span>
      <span className="text-green-400">{nombres}</span>
      <span className="text-yellow-400">{padding}</span>
    </button>
  );
};

// ************TODO: CSS Properties en TypeScript   *************

type ButtonProps2 = {
  text: string;
  style: React.CSSProperties;
  //Nos permite acceder a cualquier propiedad css
};

const Button2 = ({ style, text }: ButtonProps2) => {
  return <button style={style}>{text}</button>;
};

// ************TODO: Record en TypeScript   *************
type ButtonProps3 = {
  userAges: Record<string, number>;
  //! userAges: Record<"Alice" | "Bob" | "Charlie">;
  //(En record colocamos primero la claveen este caso un string
  // y despues el tipo de variable a recibir )
};

const Button3 = ({}: ButtonProps3) => {
  return <button>Record Type</button>;
};

// ************TODO: Tipado de funciones en TypeScript   *************

type ButtonProps4 = {
  onClick: () => void;
  //Una funcion que no retornara nada, devuelve un void
};

const Button4 = ({ onClick }: ButtonProps4) => {
  return <button onClick={onClick}>Test</button>;
};

type ButtonProps5 = {
  onClick: (text: string) => void;
  //Una funcion que no retornara nada, devuelve un void
};

const Button5 = ({ onClick }: ButtonProps5) => {
  return <button onClick={() => onClick("Hello World")}>Test 2</button>;
};

function ArraysPage() {
  return (
    <div className="flex flex-col justify-center gap-y-2">
      <span className="font-semibold text-gray-400 text-center">
        Typescript para Arrays y CSS
      </span>
      <Button1
        text="Leon"
        padding={[1, 2, 3, 4, 5]}
        nombres={["elefante", "vaca", 5, "toro"]}
      />
      <Button2
        text="Leon"
        style={{
          backgroundColor: "gold",
          color: "black",
          fontSize: "30px",
          padding: "6px",
        }}
      />
      <Button3
        userAges={{
          alice: 20,
          bob: 22,
          charlie: 33,
        }}
      />
      <span className="font-medium text-gray-400 text-center">
        Typescript para funciones
      </span>
      <Button4 onClick={() => alert("Funciona!")} />
      <Button5 onClick={() => alert("Funciona!")} />
    </div>
  );
}

export default ArraysPage;
