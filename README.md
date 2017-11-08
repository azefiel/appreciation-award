# Appreciation Award [![Build Status][travis-badge]][travis-link] [![Demo][heroku-badge]][heroku-link]

Randomly pick a winner out of a list of names while taking into account their total.

*(The goal of this toy project was to simplify the life of our office manager and play with react)*

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- [node](https://nodejs.org/en/download/) >= 6
- [yarn](https://yarnpkg.com/en/docs/install)
- [serve](https://www.npmjs.com/package/serve) (to locally serve a production build)

### Installing

Clone the `appreciation-award` repository

```shell
git clone https://github.com/azefiel/appreciation-award.git
```

Go to the project's folder

```shell
cd  appreciation-award
```

Install dependencies

```shell
yarn install
```

Launch development build

```shell
yarn start
```

Will start the development server and serve the app at `http://localhost:3000/`

## Running the tests

Run the existing test scenarios

```shell
yarn test
```

### unpack rows correctly

Check if the `pickWinner` module unpacks the input array by generating the correct amount of items per entry.

```javascript
const input = [
  { name: 'paul', total: 3 },
  { name: 'henri', total: 2 },
  { name: 'mathieu', total: 1 }
];

unpackRowsCorrectly(input);
// expecting ['paul', 'paul', 'paul', 'henri', 'henri', 'mathieu']
```

### random index in range

Generate `Math.pow(output.length, 3)` random indexes and check if the result matches at least once each index of the unpacked output.

```javascript
const input = ['paul', 'paul', 'paul', 'henri', 'henri', 'mathieu'];

randomIndexInRange(input);
// expecting [0, 1, 2, 3, 4, 5]
```

## Deployment

Create an optimized production build

```shell
yarn build
```

Serve the `build` folder with a static server

```shell
serve -s build
```

Will start the production server and serve the app at `http://localhost:5000/`

## Built With

* [Create React App](https://github.com/facebookincubator/create-react-app)

## Authors

* [**Joris Tirado**](https://github.com/azefiel)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


[travis-badge]: https://travis-ci.org/azefiel/appreciation-award.svg?branch=master
[travis-link]: https://travis-ci.org/azefiel/appreciation-award
[heroku-badge]: https://heroku-badge.herokuapp.com/?app=appreciation-award&style=flat&svg=1
[heroku-link]: https://appreciation-award.herokuapp.com/
