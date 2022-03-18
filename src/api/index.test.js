import { getSearch, getDetails, ROOT_URL } from './index';

test('getSearch returns correct url', () => {
  const query = 'apollo';
  expect(getSearch(query)).toBe(`${ROOT_URL}/search?q=${query}&media_type=image`);
});

test('getDetails returns correct url', () => {
  const nasaId = 'as11-40-5874';
  expect(getDetails(nasaId)).toBe(`${ROOT_URL}/search?nasa_id=${nasaId}`);
});
