import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Row } from 'antd';
import { Link } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import locale from './cards.locale';

const strings = new LocalizedStrings(locale);

function Cards(props) {
  const { items, loading } = props;
  return items ? (
    <Row gutter={16} justify="space-around">
      {items.map((item) => (
        <StyledCard
          span={16}
          type="inner"
          key={item.id}
          loading={loading}
          cover={<Thumbnail loading="lazy" alt={item.title} src={item.thumbnail} />}
          extra={<Link to={`/details/${item.id}`}>{strings.extra}</Link>}
        >
          <Description>
            <Label>{strings.title}</Label>
            {item.title || strings.unknown}
          </Description>
          <Description>
            <Label>{strings.photographer}</Label>
            {item.photographer || strings.unknown}
          </Description>
          <Description>
            <Label>{strings.location}</Label>
            {item.location || strings.unknown}
          </Description>
        </StyledCard>
      ))}
    </Row>
  ) : null;
}

const StyledCard = styled(Card)`
  width: 300px;
  height: 400px;
  margin: 16px 0;
`;

const Description = styled.p``;

const Label = styled.span`
  padding: 0 5px 0 0;
  font-weight: 500;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  width: 300px;
  height: 200px;
`;

Cards.defaultProps = {
  items: null,
};

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      photographer: PropTypes.string,
      location: PropTypes.string,
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  loading: PropTypes.bool.isRequired,
};

export default Cards;
