export const getCookie = (cname) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return false;
};

export const writeCookie = (key, value, days) => {
  const date = new Date();

  days = days || 365;
  date.setTime(+date + days * 86400000);

  const cookie = (document.cookie =
    key + "=" + value + "; expires=" + date.toGMTString() + "; path=/");

  return cookie;
};

export const deleteCookie = () => {
  document.cookie = "jwt_token=; Max-Age=0; path=/;";
};
