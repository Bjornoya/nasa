import { useEffect } from 'react';
import styled from 'styled-components';
import { notification, Card, Image } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import useApi from 'hooks/useApi';
import { getDetails } from 'api';
import { convertItems } from 'helpers';
import styles from 'assets/styles/variables';
import { CONFIG } from './utils';
import locale from './details.locale';

const strings = new LocalizedStrings(locale);

function Details() {
  const detailsApi = useApi(getDetails);
  const navigate = useNavigate();
  const { nasa_id: id } = useParams();
  const item = detailsApi.data?.collection?.items;
  const convertedData = convertItems(item, CONFIG.fields, CONFIG.imgSize)?.[0];

  /* Data prefetching */
  useEffect(() => {
    detailsApi.request(id);
    if (detailsApi.error) notification.error({ message: detailsApi.error });
  }, []);

  return (
    <Card
      loading={detailsApi.loading}
      title={convertedData?.title || ''}
      cover={<StyledImage preview={false} src={convertedData?.thumbnail || ''} />}
      extra={<Extra onClick={() => navigate(-1)}>{strings.goBack}</Extra>}
    >
      {convertedData
        ? Object.entries(convertedData).map(([key, value]) => (
            <Description key={key}>
              <Label>{strings[key]}</Label>
              {value || strings.unknown}
            </Description>
          ))
        : null}
    </Card>
  );
}

const Extra = styled.div`
  padding: 0 4px;
  color: #0074d9;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #40a9ff;
  }
`;

const Description = styled.p``;

const StyledImage = styled(Image)`
  width: 500px;
  height: 300px;
  object-fit: cover;
  @media screen and (max-width: ${styles.screens.tablet}) {
    width: 100%;
  }
`;

const Label = styled.span`
  padding: 0 5px 0 0;
  font-weight: 500;
`;

export default Details;
