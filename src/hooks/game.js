const useGame = () => {
  const items = ["scissors", "paper", "rock", "lizard", "spock"];

  const [scissors, paper, rock, lizard, spock] = items;

  const rules = {
    scissors: [paper, lizard],
    paper: [rock, spock],
    rock: [lizard, scissors],
    lizard: [spock, paper],
    spock: [scissors, rock],
  };

  const game = (userPick) => {
    let computerPick = items[randomPick()];

    while (userPick === computerPick) {
      computerPick = items[randomPick()];
    }

    let value = null;

    if (rules[userPick].includes(computerPick)) {
      value = true;
    } else {
      value = false;
    }

    return { value, userPick, computerPick };
  };

  function randomPick() {
    return Math.ceil(Math.random() * items.length) - 1;
  }

  return game;
};

export default useGame;
