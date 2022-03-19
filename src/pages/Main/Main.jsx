import { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Search from 'components/Search';
import Filters from './Filters';

const TYPES = {
  SEARCH: 'SEARCH',
  FILTERS: 'FILTERS',
};

const initialState = { query: '', dates: { moment: null, strings: ['', ''] } };

function reducer(state, action) {
  switch (action.type) {
    case TYPES.SEARCH:
      return { ...state, query: action.payload };
    case TYPES.FILTERS:
      return { ...state, dates: action.payload };
    default:
      throw new Error();
  }
}

function Main() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSearch = (e) => {
    dispatch({ type: TYPES.SEARCH, payload: e.target.value });
  };

  const onSetFilters = (date, dateString) => {
    dispatch({ type: TYPES.FILTERS, payload: { moment: date, strings: dateString } });
  };

  /* Update URL on search query and selected filters */
  useEffect(() => {
    const params = new URLSearchParams();
    if (state.query) {
      params.append('q', state.query);
    }
    if (state.query && state.dates.strings.every(Boolean)) {
      params.append('year_start', state.dates.strings[0]);
      params.append('year_end', state.dates.strings[1]);
    }
    navigate({ search: params.toString() });
  }, [state.query, state.dates.strings, navigate]);

  return (
    <>
      <Bar>
        <Search onChange={onSearch} value={state.query} />
        <StyledFilters onChange={onSetFilters} value={state.dates.moment} />
      </Bar>
      <div>Content</div>
    </>
  );
}

const Bar = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: right;
`;

const StyledFilters = styled(Filters)`
  margin: 16px 0;
`;

export default Main;
