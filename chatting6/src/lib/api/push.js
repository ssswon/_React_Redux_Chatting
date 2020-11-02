import axios from 'axios';

//get방식 (서버)
// export const login = () => client.get(`/api/login/${id}`);

//post방식
//뒤에 인자 보내기

//객체형태로 받기

export const push = ({ msg }) =>
  axios.post(`http://localhost:4000/chatLogs`, { msg });

//get과 post방식은 쓰는 차이가 있다. post는 인자를 준다.
