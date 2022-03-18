import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoWebp from 'assets/img/logo.webp';
import LogoPng from 'assets/img/logo.png';

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
  width: 96px;
  height: 96px;
`;

const Title = styled.span`
  color: #0074d9;
  font-weight: 600;
`;

Logo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Logo;
