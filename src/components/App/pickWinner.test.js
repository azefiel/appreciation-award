import pickWinner, { createBucket, randomIndex } from './pickWinner';

describe('pickWinner', () => {
  const rows = [
    { name: 'paul', total: 3 },
    { name: 'henri', total: 2 },
    { name: 'jacques', total: 1 }
  ];
  const expectedBucket = ['paul', 'paul', 'paul', 'henri', 'henri', 'jacques'];
  const expectedIndexes = [0, 1, 2, 3, 4, 5];

  it('unpack rows correctly', () => {
    const bucket = createBucket(rows);
    expect(bucket).toEqual(expectedBucket);
  });

  it('random index in range', () => {
    const iterator = Math.pow(expectedBucket.length, 3);
    const randomIndexes = Array(iterator)
      .fill()
      .reduce(array => {
        const index = randomIndex(expectedBucket);
        !array.includes(index) && array.push(index);
        return array;
      }, [])
      .sort();

    expect(randomIndexes).toEqual(expectedIndexes);
  });
});
