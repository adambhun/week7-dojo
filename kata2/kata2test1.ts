'use strict';

import { chop, chop2, chop3 } from './kata2';
let test = require('tape');

test('kata2 test', (t) => {
  t.equal(-1,chop(3,[]));
  t.equal(-1,chop(3,[1]));
  t.equal(0,chop(1,[1]));

  t.equal(0, chop(1, [1,3,5]));
  t.equal(1, chop(3, [1,3,5]));
  t.equal(2, chop(5, [1,3,5]));
  t.equal(-1, chop(0, [1,3,5]));
  t.equal(-1, chop(2, [1,3,5]));
  t.equal(-1, chop(4, [1,3,5]));
  t.equal(-1, chop(6, [1,3,5]));

  t.equal(0, chop(1, [1,3,5,7]));
  t.equal(1, chop(3, [1,3,5,7]));
  t.equal(2, chop(5, [1,3,5,7]));
  t.equal(3, chop(7, [1,3,5,7]));
  t.equal(-1, chop(0, [1,3,5,7]));
  t.equal(-1, chop(2, [1,3,5,7]));
  t.equal(-1, chop(4, [1,3,5,7]));
  t.equal(-1, chop(6, [1,3,5,7]));
  t.equal(-1, chop(8, [1,3,5,7]));
    t.end();
});