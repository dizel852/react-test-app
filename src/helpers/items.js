const STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const NUMBER = '0123456789';

/**
 *
 * @param {number} length - Generate id
 */
// export const generateId = length => {
//   let result = '';
//   const characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// };

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
 * @param {number} length - Generate item {id: string, title: string}
 */
const makeItem = length => {
  const randomId = +generateRandomItem(5, NUMBER);
  const randomText = generateRandomItem(length, STRING);
  return { id: randomId, title: randomText };
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
