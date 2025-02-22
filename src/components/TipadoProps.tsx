//TODO: Fundamentos de TypeScript y diferentes tipos de Tipado de props
const title: string = "Hello Word";

function Button() {
  return <button>{title}</button>;
}

function Button2(props: {
  text: string;
  subtitle: number;
  opcional?: boolean;
  //Con ? es xq es un props opcional
}) {
  return <button>{props.text}</button>;
}

type ButtonProps3 = {
  text: string;
  subtitle: number;
  opcional: boolean;
};

function Button3(props: ButtonProps3) {
  const { opcional, subtitle, text } = props;
  //Destructuracion

  return (
    <button>
      {subtitle}
      {text}
      {opcional && "red"}
    </button>
  );
}

type ButtonProps4 = {
  text: string;
  subtitle: number;
  opcional: boolean;
};

const Button4 = ({ text, opcional, subtitle }: ButtonProps4) => {
  //Destructuracion directamente al pasar los props
  return (
    <button>
      {text}
      {subtitle}
    </button>
  );
};

type ButtonProps5 = {
  text: string;
  subtitle: number;
  opcional: boolean;
};

const Button5: React.FC<ButtonProps5> = ({ text, opcional, subtitle }) => {
  return (
    <button>
      {text}
      {subtitle}
    </button>
  );
};

// ************TODO: Union de Tipos *************
type Color = "red" | "yellow" | "blue" | "green" | "black" | "purple";

type ButtonProps2 = {
  text: string;
  subtitle: number;
  color?: Color;
  backgroundColor?: "red" | "yellow" | "blue" | "green" | "black";
  sizes?: 30 | 40 | 50;
};

const Button6 = ({
  text,
  subtitle,
  color,
  sizes,
  backgroundColor,
}: ButtonProps2) => {
  return (
    <button className="flex gap-x-2">
      <span className="text-red-400">{text}</span>
      <span className="text-gray-400">{subtitle}</span>
      <span className="text-green-400"> {color}</span>
      <span className="text-yellow-400"> {sizes}</span>
      <span className="text-purple-400"> {backgroundColor}</span>
    </button>
  );
};

function PropsPage() {
  return (
    <div className="flex flex-col justify-center gap-y-2 ">
      <Button />
      <Button2 text="Carro" subtitle={2} />
      <Button3 text="Moto" subtitle={3} opcional={true} />
      <Button4 text="Barco" subtitle={4} opcional={true} />
      <Button5 text="Avion" subtitle={5} opcional={false} />
      <Button6
        text="Monopatin"
        subtitle={6}
        color="black"
        sizes={30}
        backgroundColor="red"
      />
    </div>
  );
}

export default PropsPage;
