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
    text: string,
    style: React.CSSProperties;
    //Nos permite acceder a cualquier propiedad css
  };

const Button2 = ({ style, text }: ButtonProps2) => {
  return (
    <button style={style}>
        {text}
    </button>
  );
};

function ArraysPage() {
  return (
    <div className="flex flex-col justify-center">
      <Button1
        text="Leon"
        padding={[1, 2, 3, 4, 5]}
        nombres={["elefante", "vaca", 5, "toro"]}
      />
      <Button2
        text="Leon"
        style={{
            backgroundColor:"gold", color:"black",
            fontSize:"30px", padding:"6px"
        }}
      />
    </div>
  );
}

export default ArraysPage;
