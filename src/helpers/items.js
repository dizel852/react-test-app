const STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const NUMBER = '0123456789';

/**
 *
 * @param {number} length - Generate id
 */
export const generateId = () => {
  return +generateRandomItem(9, NUMBER)
};

const generateRandomItem = (length, charSet) => {
  let result = '';
  const charactersLength = charSet.length;
  for (let i = 0; i < length; i++) {
    result += charSet.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
/**
 *
 * @param {number} length - Generate item {id: string, text: string}
 */
const makeItem = length => {
  const randomId = +generateRandomItem(9, NUMBER);
  const randomText = generateRandomItem(length, STRING);
  return { id: randomId, text: randomText };
};

/**
 *
 * @param {number} amountOfItems - Desired amount of items
 * @param {number} itemLength - Desired length of item title
 */
export const generateRandomItems = (amountOfItems, itemLength) => {
  let buff = [];
  for (let i = 0; buff.length < amountOfItems; i++) {
    setTimeout(buff.push(makeItem(itemLength)), 0);
  }
  return buff;
};
