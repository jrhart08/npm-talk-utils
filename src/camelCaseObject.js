import camelCase from 'lodash/camelCase';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

export default (obj) => {
  if (!isObject(obj)) {
    return obj;
  }
  else if (isArray(obj)) {
    return obj.map(v => toCamelCase(v));
  }

  const camelCased = {};
  Object.entries(obj).forEach(([k, v]) => {
    camelCased[camelCase(k)] = toCamelCase(v);
  });

  return camelCased;
};
