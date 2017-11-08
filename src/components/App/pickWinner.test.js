import pickWinner from './pickWinner';

const rows = [{
  name: 'paul',
  total: 3
},{
  name: 'henri',
  total: 2
},{
  name: 'mathieu',
  total: 1
}];
const expectedBucket = [
  'paul',
  'paul',
  'paul',
  'henri',
  'henri',
  'mathieu'
];

test('unpack rows correctly', () => {
  const bucket = pickWinner(rows).bucket;
  expect(bucket).toEqual(expectedBucket);
});

test('random index in range', () => {
  const max = Math.pow(expectedBucket.length, 3);
  const randomIndexes = [];

  for (var i = 0; i < max; i++) {
    const randomIndex = pickWinner(rows).randomIndex;

    if (randomIndexes.indexOf(randomIndex) < 0) {
      randomIndexes.push(randomIndex);
    }
  }

  const randomIndexesSorted = [...randomIndexes].sort();
  const expectedBucketSorted = expectedBucket
    .map((value, index) => index)
    .sort();

  expect(randomIndexesSorted).toEqual(expectedBucketSorted);
});
