interface Props {
    text: string
    function: any
}


const Button = (props: Props) => {
  return (
    <button onClick={props.function} className="border rounded-lg bg-yellow-300 shadow-xl px-3 py-2">{props.text}</button>
  )
}

export default Button