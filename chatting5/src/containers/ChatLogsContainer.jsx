import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatLogs from '../components/ChatLogs';
import { send } from '../modules/chat';

const ChatLogContainer = () => {
  const { form } = useSelector(({ chat }) => ({
    form: chat.form,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(send(form)); //모듈에 있는 getUsers()를 호출객체를 리듀서에 전달
  }, []); //dispatch가 바뀌면 rendering하도록

  console.log(form);

  return (
    //
    <div>
      <ChatLogs form={form} />
    </div>
  );
};

export default ChatLogContainer;
