import { DatePicker } from 'antd';
import PropTypes from 'prop-types';

const { RangePicker } = DatePicker;

function Filters(props) {
  const { onChange, value, disabled, className } = props;
  return (
    <RangePicker
      value={value}
      onChange={onChange}
      picker="year"
      size="large"
      disabled={disabled}
      className={className}
      allowClear
    />
  );
}

Filters.defaultProps = {
  value: null,
  disabled: false,
  className: '',
};

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Object), // moment.js
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Filters;
