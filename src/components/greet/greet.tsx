import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function greet(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return (
    <div>Hello {props.name}</div>
  )
}
