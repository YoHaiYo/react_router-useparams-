import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const status = {
  kr: {
    navi: ["naver", "google"]
  }
}

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Link to={'/'}>홈</Link>

        {/* <Link to={`/${status['kr']['navi'][0]}`}>{`${status['kr']['navi'][0]}`}</Link> */}

        {/* <Link to={'/work'}>작업</Link> */}
        {/* : 붙여진것은 변수. work 내에 plan컴포넌트만 보여줄 수 있음. 
          필터링같은 기능. useParams라는 훅을 사용해야된다.
        */}
        {/* <Link to={'/work/:plan'}>대표작업</Link> */}
        <Link to={'user/login'}>로그인</Link>
        {/* <Link to={'https://github.com/YoHaiYo'}>깃허브</Link> */}
        {/* <a href="https://github.com/YoHaiYo" target="_blank">깃허브</a> */}
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid var(--line-gray);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav = styled.nav`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Navbar;
