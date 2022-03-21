import { getAssetsImage } from 'api';

export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export const convertItems = (items, fields, imgSize) =>
  items?.map((item) => {
    const { nasa_id: nasaId, ...rest } = item.data[0];
    return {
      ...Object.fromEntries(fields.map((field) => [[field], rest[field]])),
      thumbnail: getAssetsImage(nasaId, imgSize),
      id: nasaId,
    };
  });
