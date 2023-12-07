const createElement = (tagName, attributes = {}, textContent = "") => {
  const element = document.createElement(tagName);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  element.textContent = textContent;
  return element;
};

const modifyStyle = (element, styles = {}) => {
  for (const key in styles) {
    element.style[key] = styles[key];
  }
};

const addGlobalEventListener = (type, element, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(element)) callback(e);
  });
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

const setCookie = (name, value, days) => {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    cookieText += `;expires=${date.toISOString()}`;
  }
  document.cookie = cookieText;
};

const getCookie = (name) => {
  let cookieName = `${encodeURIComponent(name)}=`,
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = null;
  if (cookieStart > -1) {
    let cookieEnd = document.cookie.indexOf(";", cookieStart);
    if (cookieEnd === -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(
      document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
    );
  }
  return cookieValue;
};

const deleteCookie = (name) => {
  setCookie(name, "", -1);
};

module.exports = {
  createElement,
  modifyStyle,
  addGlobalEventListener,
  setLocalStorage,
  getLocalStorage,
  setSessionStorage,
  getSessionStorage,
  setCookie,
  getCookie,
  deleteCookie,
};

// export default {
//   createElement,
//   modifyStyle,
//   addGlobalEventListener,
//   setLocalStorage,
//   getLocalStorage,
//   setSessionStorage,
//   getSessionStorage,
//   setCookie,
//   getCookie,
//   deleteCookie,
// };
