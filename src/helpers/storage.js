export const saveToStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
}

export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}