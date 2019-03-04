'use strict';

import { chop, chop2, chop3 } from './kata2';
let test = require('tape');

test('kata2 test3', (t) => {
  t.equal(-1,chop3(3,[]));
  t.equal(-1,chop3(3,[1]));
  t.equal(0,chop3(1,[1]));

  t.equal(0, chop3(1, [1,3,5]));
  t.equal(1, chop3(3, [1,3,5]));
  t.equal(2, chop3(5, [1,3,5]));
  t.equal(-1, chop3(0, [1,3,5]));
  t.equal(-1, chop3(2, [1,3,5]));
  t.equal(-1, chop3(4, [1,3,5]));
  t.equal(-1, chop3(6, [1,3,5]));

  t.equal(0, chop3(1, [1,3,5,7]));
  t.equal(1, chop3(3, [1,3,5,7]));
  t.equal(2, chop3(5, [1,3,5,7]));
  t.equal(3, chop3(7, [1,3,5,7]));
  t.equal(-1, chop3(0, [1,3,5,7]));
  t.equal(-1, chop3(2, [1,3,5,7]));
  t.equal(-1, chop3(4, [1,3,5,7]));
  t.equal(-1, chop3(6, [1,3,5,7]));
  t.equal(-1, chop3(8, [1,3,5,7]));
    t.end();
});