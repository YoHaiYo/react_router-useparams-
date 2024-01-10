import React from "react";
import CustomText from "../components/CustomText";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "../components/Button";

const Main = () => {
  const pageNum = [1, 2, 3, 4, 5];
  return (
    <>
      <CustomText typography="h1" bold>
        메인페이지 입니다
      </CustomText>
      <br />
      <CustomText typography="p">메인페이지는 좋죠</CustomText>
      <ListWrapper>
        {pageNum.map((e, i) => {
          return (
            <React.Fragment key={i} >
              {/* <Link to={`/page/${e}`} key={i}> */}
              <Link to={`http://yohayo.dothome.co.kr/yoajung/bbs/board.php?bo_table=menu&wr_id=${e}`}>
                <Button>요아정 상품 {e}</Button>
              </Link>
            </React.Fragment>
          );
        })}
      </ListWrapper>
    </>
  );
};
const ListWrapper = styled.ul`
  display: flex;
  gap: 8px;
`;

export default Main;
