
export default function toObject(input, key = 'id') {
  return input.reduce((l, r) => ({ ...l, [r[key]]: r }), {});
};
