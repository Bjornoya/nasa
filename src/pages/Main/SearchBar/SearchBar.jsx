import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Search from 'components/Search';
import styles from 'assets/styles/variables';
import Filters from '../Filters';
import { initialState, reducer, regex, TYPES } from '../utils';

function SearchBar(props) {
  const { request, setData } = props;
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSearch = (e) => {
    const {
      target: { value },
    } = e;
    if (value.match(regex)) {
      dispatch({ type: TYPES.SEARCH, payload: value });
    }
  };

  const onSetFilters = (date, dateString) => {
    dispatch({ type: TYPES.FILTERS, payload: { moment: date, strings: dateString } });
  };

  /* Update URL on search query and selected filters */
  useEffect(() => {
    const params = new URLSearchParams('media_type=image');
    /* Manually reset the data if input is empty (BE returns an array of values even if we don't pass params) */
    if (!state.query) {
      setData(null);
    }
    if (state.query && state.dates.strings.every(Boolean)) {
      params.append('year_start', state.dates.strings[0]);
      params.append('year_end', state.dates.strings[1]);
    }
    /* We do the API call only if input isn't empty */
    if (state.query) {
      params.append('q', state.query);
      request(params.toString());
    }
    navigate({ search: params.toString() });
  }, [state.query, state.dates.strings, navigate]);

  return (
    <Bar>
      <Search onChange={onSearch} value={state.query} />
      <StyledFilters onChange={onSetFilters} value={state.dates.moment} />
    </Bar>
  );
}

const Bar = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: right;
  @media screen and (max-width: ${styles.screens.tablet}) {
    width: 100%;
  }
`;

const StyledFilters = styled(Filters)`
  margin: 16px 0;
  @media screen and (max-width: ${styles.screens.mobile}) {
    width: 100%;
  }
`;

SearchBar.propTypes = {
  request: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default SearchBar;
