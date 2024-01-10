import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomText from '../components/CustomText';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from '../components/Button';

const Page = () => {
  const { pageNumber } = useParams();

  useEffect(() => {
    // 페이지가 로드될 때마다 실행되는 효과
    axios
      .get(`여기에_주소를_추가_해주세요${pageNumber}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  return (
    <>
      <CustomText typography="h1" bold>
        Page {pageNumber} 입니다
      </CustomText>
      <br />
      <CustomText typography="p">{`페이지 주소는 ${pageNumber} 입니다`}</CustomText>
      <Link to={`/`}>
        <Button>뒤로가기</Button>
      </Link>
    </>
  );
};

export default Page;
