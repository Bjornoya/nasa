import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoWebp from 'assets/img/logo.webp';
import LogoPng from 'assets/img/logo.png';
import theme from 'assets/styles/variables';

function Logo(props) {
  const { children } = props;
  return (
    <Container>
      <Title>{children}</Title>
      <picture>
        <source srcSet={LogoWebp} type="image/webp" />
        <Image src={LogoPng} alt="logo" />
      </picture>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
`;

const Title = styled.span`
  color: ${theme.colors.title};
  font-weight: 600;
`;

Logo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Logo;
