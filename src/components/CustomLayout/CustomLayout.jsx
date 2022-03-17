import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styled from 'styled-components';
import LocalizedStrings from 'react-localization';
import locales from './custom-layout.locale';

const strings = new LocalizedStrings(locales);

const { Header, Content, Footer } = Layout;

export function CustomLayout(props) {
  const { children } = props;
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <StyledFooter>{strings.footer}</StyledFooter>
    </Layout>
  );
}

const StyledFooter = styled(Footer)`
  text-align: center;
`;

CustomLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
