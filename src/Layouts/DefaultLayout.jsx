import styled from '@emotion/styled';
import Navbar from '../components/Navbar';

export const NavLayout = () => {
  return (
    <>
      <Navbar />
      <DefaultLayout>
        {/* 해당 URL에 맞는 Component를 보여주려면 어떤 컴포넌트를 사용해야 할까요? */}
      </DefaultLayout>
    </>
  );
};
export const Layout = () => {
  return (
    <DefaultLayout>
      {/* 해당 URL에 맞는 Component를 보여주려면 어떤 컴포넌트를 사용해야 할까요? */}
    </DefaultLayout>
  );
};

const DefaultLayout = styled.div`
  width: 100%;
  min-height: 90vh;
  margin: 0 auto;
  max-width: 720px;
  padding: 36px;
  border-radius: 16px;
  border: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export default DefaultLayout;
