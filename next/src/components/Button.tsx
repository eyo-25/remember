type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button onClick={onClick} className="p-2 ml-4 text-white bg-black rounded">
      {text}
    </button>
  );
}
