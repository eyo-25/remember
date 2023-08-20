type Props = {
  text: string;
  onClick: () => void;
  style?: string;
};

export default function Button({ text, onClick, style }: Props) {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-white bg-black rounded ${style}`}
    >
      {text}
    </button>
  );
}
