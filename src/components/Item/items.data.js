import { ReactComponent as Scissors } from "../../images/icon-scissors.svg";
import { ReactComponent as Paper } from "../../images/icon-paper.svg";
import { ReactComponent as Rock } from "../../images/icon-rock.svg";
import { ReactComponent as Lizard } from "../../images/icon-lizard.svg";
import { ReactComponent as Spock } from "../../images/icon-spock.svg";

export const data = [
  {
    name: "scissors",
    bg1: "hsl(40, 84%, 53%)",
    bg2: "hsl(39, 89%, 49%)",
    icon: <Scissors />,
    top: "-20%",
    left: "30%",
  },
  {
    name: "paper",
    bg1: "hsl(230, 89%, 65%)",
    bg2: "hsl(230, 89%, 62%)",
    icon: <Paper />,
    top: "25%",
    right: "-10%",
  },
  {
    name: "rock",
    bg1: "hsl(349, 70%, 56%)",
    bg2: "hsl(349, 71%, 52%)",
    icon: <Rock />,
    bottom: "-15%",
    right: 0,
  },
  {
    name: "lizard",
    bg1: "hsl(261, 72%, 63%)",
    bg2: " hsl(261, 73%, 60%)",
    icon: <Lizard />,
    bottom: "-15%",
  },
  {
    name: "spock",
    bg1: "hsl(189, 58%, 57%)",
    bg2: "hsl(189, 59%, 53%)",
    icon: <Spock />,
    top: "25%",
    left: "-10%",
  },
];
