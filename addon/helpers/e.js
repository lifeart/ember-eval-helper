import { helper } from '@ember/component/helper';
const func = function(str) {
  return new Function( 'return (' + str + ')' );
}
export function e([rawStr, context = null ] = ['', null]/*, hash*/) {
  const str = rawStr.trim();
  const hasLiterals = str.startsWith('`') && str.endsWith('`');
  const result = func(str).call(context);
  return hasLiterals ?  func(result).call(context) : result;
}

export default helper(e);
