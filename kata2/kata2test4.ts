'use strict';

import { chop4 } from './kata2';
let test = require('tape');

test('kata2 test3', (t) => {
  t.equal(-1,chop4(3,[]));
  t.equal(-1,chop4(3,[1]));
  t.equal(0,chop4(1,[1]));

  t.equal(0, chop4(1, [1,3,5]));
  t.equal(1, chop4(3, [1,3,5]));
  t.equal(2, chop4(5, [1,3,5]));
  t.equal(-1, chop4(0, [1,3,5]));
  t.equal(-1, chop4(2, [1,3,5]));
  t.equal(-1, chop4(4, [1,3,5]));
  t.equal(-1, chop4(6, [1,3,5]));

  t.equal(0, chop4(1, [1,3,5,7]));
  t.equal(1, chop4(3, [1,3,5,7]));
  t.equal(2, chop4(5, [1,3,5,7]));
  t.equal(3, chop4(7, [1,3,5,7]));
  t.equal(-1, chop4(0, [1,3,5,7]));
  t.equal(-1, chop4(2, [1,3,5,7]));
  t.equal(-1, chop4(4, [1,3,5,7]));
  t.equal(-1, chop4(6, [1,3,5,7]));
  t.equal(-1, chop4(8, [1,3,5,7]));
    t.end();
});