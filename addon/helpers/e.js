import { helper } from '@ember/component/helper';

export function e([rawStr, context = null ] = ['', null]/*, hash*/) {
  const str = rawStr.trim();
  function ctx(text) {
    const hasLiterals = text.startsWith('`') && text.endsWith('`');
    const firstResult = eval('[' + text + ']')[0];
    return hasLiterals ? eval('[' + firstResult + ']')[0] : firstResult;
  }
  return ctx.call(context, str);
}

export default helper(e);
