// https://github.com/Minkov/dmoj-tasks/blob/master/easy/11math/02shipdamage/README.md

/* eslint-disable */
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the local test
const test = [
    '9',
    '-2',
    '-3',
    '0',
    '1',
    '-1',
    '4',
    '0',
    '-3',
    '3',
    '2'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
let damage = 0;

const ship = {};
const x1Ship = +gets();
const y1Ship = +gets();
const x2Ship = +gets();
const y2Ship = +gets();
ship.A = [x1Ship, y1Ship];
ship.B = [x2Ship, y1Ship];
ship.C = [x2Ship, y2Ship];
ship.D = [x1Ship, y2Ship];

const horizon = [0, +gets()];
const c1 = [+gets(), +gets()];
const c2 = [+gets(), +gets()];
const c3 = [+gets(), +gets()];

const c1ShotPosition = 2 * horizon[1] - c1[1];
const c2ShotPosition = 2 * horizon[1] - c2[1];
const c3ShotPosition = 2 * horizon[1] - c3[1];
const shotPositions = {
    1: [c1[0], c1ShotPosition],
    2: [c2[0], c2ShotPosition],
    3: [c3[0], c3ShotPosition],
};

const maxX = Math.max(ship.A[0], ship.B[0]);
const minX = Math.min(ship.A[0], ship.B[0]);

const maxY = Math.max(ship.A[1], ship.C[1]);
const minY = Math.min(ship.A[1], ship.C[1]);

for (let i = 1; i <= 3; i += 1) {
    const currentPoint = shotPositions[i];
    const shotX = currentPoint[0];
    const shotY = currentPoint[1];
    if ((shotX === maxX && shotY === maxY) || (shotX === maxX && shotY === minY) ||
        (shotX === minX && shotY === minY) || (shotX === minX && shotY === maxY)) {
        damage += 25;
    } else if (minX < shotX && shotX < maxX && minY < shotY && shotY < maxY) {
        damage += 100;
    } else if (minX < shotX && shotX < maxX && (shotY === maxY || shotY === minY) ||
        minY < shotY && shotY < maxY && (shotX === maxX || shotX === minX)) {
        damage += 50;
    }
}

print(`${damage}%`);
