import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatLogs from '../components/ChatLogs';

const ChatLogContainer = () => {
  const { form } = useSelector(
    ({ chat }) => ({
      form: chat.form,
    }),
    []
  );
  console.log(form);
  return (
    //
    <div>
      <ChatLogs form={form} />
    </div>
  );
};

export default ChatLogContainer;
