export const ROOT_URL = 'https://images-api.nasa.gov';

/**
 * Performing a search
 * @param {string} params - Free text search terms to compare to all indexed metadata.
 * @returns {string} - Search results API endpoint
 */
export const getSearch = (params) => fetch(`${ROOT_URL}/search?${params}`);

/**
 * Getting details by ID
 * @param {string} id - The media asset’s NASA ID
 * @returns {string} - Asset details API endpoint
 */
export const getDetails = (id) => fetch(`${ROOT_URL}/search?nasa_id=${id}`);
