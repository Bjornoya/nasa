import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styled from 'styled-components';
import LocalizedStrings from 'react-localization';
import Logo from 'components/Logo';
import theme from 'assets/styles/variables';
import locales from './custom-layout.locale';

const strings = new LocalizedStrings(locales);

const { Header, Content, Footer } = Layout;

export function CustomLayout(props) {
  const { children } = props;
  return (
    <StyledLayout>
      <Header>
        <Logo>{strings.logo}</Logo>
      </Header>
      <StyledContent>{children}</StyledContent>
      <StyledFooter>
        {strings.footer}
        <Link href={strings.link}>{strings.name}</Link>
      </StyledFooter>
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  height: 100%;
`;

const StyledContent = styled(Content)`
  padding: 64px 16px;
`;

const StyledFooter = styled(Footer)`
  padding: 16px 0;
  color: ${theme.colors.text};
  text-align: center;
  border-top: 1px solid ${theme.colors.border};
`;

const Link = styled.a`
  padding: 0 4px;
  color: ${theme.colors.link};
  font-weight: 600;
  text-decoration: none;
`;

CustomLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
