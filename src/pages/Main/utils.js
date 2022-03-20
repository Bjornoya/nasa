import { getAssetsImage } from 'api';

export const regex = '^[a-zA-Z0-9_.-]*$';

export const TYPES = {
  SEARCH: 'SEARCH',
  FILTERS: 'FILTERS',
};

export const initialState = { query: '', dates: { moment: null, strings: ['', ''] } };

export function reducer(state, action) {
  switch (action.type) {
    case TYPES.SEARCH:
      return { ...state, query: action.payload };
    case TYPES.FILTERS:
      return { ...state, dates: action.payload };
    default:
      throw new Error();
  }
}

export const convertItems = (items) =>
  items?.map((item) => {
    const { title, photographer, location, nasa_id: nasaId } = item.data[0];
    return {
      title,
      photographer,
      location,
      thumbnail: getAssetsImage(nasaId, 'small'),
      id: nasaId,
    };
  });
