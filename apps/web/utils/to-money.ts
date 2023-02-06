/**
 * formatMoney(n, x)
 *
 * @param integer n: length of decimal
 * @param integer x: length of sections
 */
function formatMoney(number: number = 0, n: number = 0, x: number = 3) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
  return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,')
}

export default formatMoney
