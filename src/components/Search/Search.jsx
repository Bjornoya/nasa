import { Input } from 'antd';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import locale from './search.locale';

const strings = new LocalizedStrings(locale);

function Search(props) {
  const { onChange, value } = props;
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={strings.placeholder}
      size="large"
      allowClear
    />
  );
}

Search.defaultProps = {
  value: '',
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Search;
