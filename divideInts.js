var MAX_NEG = -2147483648;
var MAX_POS = 2147483647;

function divide(dividend, divisor) {
  /*
  -------------------------------------
  Edge Cases
  -------------------------------------
  */
  if (dividend === 0) {
    return 0;
  }

  if (divisor === 1) {
    return dividend;
  }

  if (dividend === MAX_NEG && divisor === -1) {
    return MAX_POS;
  }
  if (dividend === MAX_POS && divisor === -1) {
    return MAX_NEG;
  }

  /*
  -------------------------------------
  Function Body
  -------------------------------------
  */

  let q = 0;

  if (dividend > 0) {
    if (divisor > 0) {
      while (dividend >= divisor) {
        dividend -= divisor;
        q++;
      }
    } else if (divisor < 0) {
      while (dividend >= 0) {
        dividend += divisor;
        q--;
      }
      q++;
    }
  } else if (dividend < 0) {
    if (divisor > 0) {
      while (dividend <= 0) {
        dividend += divisor;
        q--;
      }
      q++;
    } else if (divisor < 0) {
      while (dividend <= divisor) {
        dividend -= divisor;
        q++;
      }
    }
  }

  return q;
}
