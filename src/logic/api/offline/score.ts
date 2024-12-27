const getFrequency = async (word: string): Promise<number> => {
  const freq = 10;
  return freq;
};

const getFrequencyScore = async (word: string): Promise<number> => {
  const freq = await getFrequency(word);
  return Math.sqrt(100 - freq);
}

const getLengthScore = (word: string): number => {
  return Math.sqrt(word.length * 10);
}

const getBaseScore = async (word: string): Promise<number> => {
  const freqScore = await getFrequencyScore(word);
  const lengthScore = getLengthScore(word);
  const multiplier = (100 + freqScore) / 100;
  return lengthScore * multiplier;
};

const getScore = async (word: string): Promise<number> => {
  const baseScore = await getBaseScore(word);
  return Math.round(baseScore);
};

export { getScore };
