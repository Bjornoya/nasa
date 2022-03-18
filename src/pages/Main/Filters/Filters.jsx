import { DatePicker } from 'antd';
import PropTypes from 'prop-types';

const { RangePicker } = DatePicker;

function Filters(props) {
  const { onChange, value, disabled } = props;
  return (
    <RangePicker
      value={value}
      onChange={onChange}
      picker="year"
      size="large"
      disabled={disabled}
      allowClear
    />
  );
}

Filters.defaultProps = {
  value: null,
  disabled: false,
};

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Object), // moment.js
  disabled: PropTypes.bool,
};

export default Filters;
