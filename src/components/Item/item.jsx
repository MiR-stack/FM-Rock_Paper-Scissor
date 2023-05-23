import { Wraper, Icon } from "./item.styled";

export default function Item(props) {
  return (
    <Wraper {...props}>
      <Icon>{props.icon} </Icon>
    </Wraper>
  );
}
