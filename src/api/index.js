export const ROOT_URL = 'https://images-api.nasa.gov';

/**
 * Performing a search
 * @param {string} q - Free text search terms to compare to all indexed metadata.
 * @returns {string} - Search results API endpoint
 */
export const getSearch = (q) => `${ROOT_URL}/search?q=${q}&media_type=image`;

/**
 * Getting details by ID
 * @param {string} id - The media asset’s NASA ID
 * @returns {string} - Asset details API endpoint
 */
export const getDetails = (id) => `${ROOT_URL}/search?nasa_id=${id}`;
