# 리액트라우터를 이용한 라우팅처리
:pageNumber - useParams 세트로 사용
<Route path="page/:pageNumber" element={<Page />} />

const { pageNumber } = useParams();