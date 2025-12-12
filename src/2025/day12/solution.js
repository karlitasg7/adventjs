function elfBattle(elf1, elf2) {
  let elf1Points = 3;
  let elf2Points = 3;

  const DAMAGE = {
    AA: 1,
    AF: 1,
    FA: 2,
    FB: 2,
    FF: 2,
    AB: 0,
    BA: 0,
    BB: 0,
  };

  for (let i = 0; i < Math.min(elf1.length, elf2.length); i++) {
    const elf1Attack = elf1[i];
    const elf2Attack = elf2[i];

    elf2Points -= DAMAGE[elf1Attack + elf2Attack] || 0;
    elf1Points -= DAMAGE[elf2Attack + elf1Attack] || 0;

    if (elf1Points <= 0 || elf2Points <= 0) {
      break;
    }
  }

  if (elf1Points === elf2Points) {
    return 0;
  }

  return elf1Points > elf2Points ? 1 : 2;
}

module.exports = { elfBattle };
