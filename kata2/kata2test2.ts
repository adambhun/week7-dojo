'use strict';

import { chop, chop2, chop3 } from './kata2';
let test = require('tape');

test('kata2 test2', (t) => {
  t.equal(-1,chop2(3,[]));
  t.equal(-1,chop2(3,[1]));
  t.equal(0,chop2(1,[1]));

  t.equal(0, chop2(1, [1,3,5]));
  t.equal(1, chop2(3, [1,3,5]));
  t.equal(2, chop2(5, [1,3,5]));
  t.equal(-1, chop2(0, [1,3,5]));
  t.equal(-1, chop2(2, [1,3,5]));
  t.equal(-1, chop2(4, [1,3,5]));
  t.equal(-1, chop2(6, [1,3,5]));

  t.equal(0, chop2(1, [1,3,5,7]));
  t.equal(1, chop2(3, [1,3,5,7]));
  t.equal(2, chop2(5, [1,3,5,7]));
  t.equal(3, chop2(7, [1,3,5,7]));
  t.equal(-1, chop2(0, [1,3,5,7]));
  t.equal(-1, chop2(2, [1,3,5,7]));
  t.equal(-1, chop2(4, [1,3,5,7]));
  t.equal(-1, chop2(6, [1,3,5,7]));
  t.equal(-1, chop2(8, [1,3,5,7]));
    t.end();
});