import { useMemo } from 'react';
import useApi from 'hooks/useApi';
import { getSearch } from 'api';
import { convertItems } from 'helpers';
import { CONFIG } from './utils';
import SearchBar from './SearchBar';
import Cards from './Cards';

function Main() {
  const searchApi = useApi(getSearch);
  const items = searchApi.data?.collection?.items || [];
  const cardsData = useMemo(
    () => convertItems(items, CONFIG.fields, CONFIG.imgSize),
    [items.length]
  );

  return (
    <>
      <SearchBar request={searchApi.request} setData={searchApi.setData} />
      <Cards items={cardsData} loading={searchApi.loading} />
    </>
  );
}

export default Main;
