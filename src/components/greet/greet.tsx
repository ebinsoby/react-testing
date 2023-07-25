import {GreetProps} from './greet.types'

export default function greet(props: GreetProps) {
  return (
    <div>Hello {props.name? props.name: "Guest"}</div>
  )
}
