export function def<T = Unknow>(target: T): target is NonNullable<T> {
  return target !== undefined && target !== null
}
export function func(target: Unknow): target is Function {
  return typeof target === 'function'
}
export function object(target: Unknow): target is AMap {
  return target !== null && typeof target === 'object'
}
export function promise<T = any>(target: unknown): target is Promise<T> {
  return object(target) && func(target.then) && func(target.catch)
}
export function str(target: unknown): target is string {
  return typeof target === 'string'
}
export function date(target: Unknow): target is Date {
  return Object.prototype.toString.call(target) === '[object Date]' &&
  !Number.isNaN((target as Date).getTime());
}
export function mobile(target: string): boolean {
  target = target.replace(/[^-|\d]/g, '');
  return (
    /^((\+86)|(86))?(1)\d{10}$/.test(target) || /^0[0-9-]{10,13}$/.test(target)
  );
}
export function num(target: Numeric): target is string {
  return typeof target === 'number' || /^\d+(\.\d+)?$/.test(target);
}
