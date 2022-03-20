export const ROOT_URL = 'https://images-api.nasa.gov';
export const ROOT_ASSETS_URL = 'https://images-assets.nasa.gov';

/**
 * Performing a search
 * @param {string} params - Free text search terms to compare to all indexed metadata.
 * @returns {Promise} - Search results API data
 */
export const getSearch = (params) => fetch(`${ROOT_URL}/search?${params}`);

/**
 * Getting details by ID
 * @param {string} id - The media asset’s NASA ID
 * @returns {Promise} - Asset details API data
 */
export const getDetails = (id) => fetch(`${ROOT_URL}/search?nasa_id=${id}`);

/**
 * Getting image URL by id and size
 * @param {string} id - The media asset’s ID
 * @param {'orig'|'large'|'medium'|'small'|'thumb'} size - Image's size
 * @returns {string} - Image's URL
 */
export const getAssetsImage = (id, size) => `${ROOT_ASSETS_URL}/image/${id}/${id}~${size}.jpg`;
