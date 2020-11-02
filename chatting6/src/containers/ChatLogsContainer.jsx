import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatLogs from '../components/ChatLogs';
import { updateMessages, initialField, send } from '../modules/chat';

const ChatLogContainer = () => {
  const { form, msgs } = useSelector(({ chat }) => ({
    form: chat.form,
    msgs: chat.msgs,
  }));
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(send(form)); //모듈에 있는 getUsers()를 호출객체를 리듀서에 전달
  // }, []); //dispatch가 바뀌면 rendering하도록
  useEffect(() => {
    dispatch(updateMessages()); //모듈에 있는 getUsers()를 호출객체를 리듀서에 전달
  }, [dispatch]); //dispatch가 바뀌면 rendering하도록

  return (
    //
    <div>
      <ChatLogs msgs={msgs} />
    </div>
  );
};

export default ChatLogContainer;
