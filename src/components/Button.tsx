type Props = {
  text: string;
}

function Button({ text }: Props) {
  return (
    <div>
      <button type="button">
        {text}
      </button>
    </div>
  )
}

export default Button;
