import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatBox from '../components/ChatBox';
import { changeField, initialField, send } from '../modules/chat';

const ChatBoxContainer = () => {
  const { form, error } = useSelector(({ chat }) => ({
    form: chat.form,
    error: chat.error,
  }));
  console.log(form.msg);
  const [user1, setUser1] = useState('user1');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(send(form));
  };
  const onChange = (e) => {
    let form = e.target.value;
    dispatch(changeField(form));
  };
  return (
    //
    <div>
      <ChatBox
        // form={form}
        user1={user1}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ChatBoxContainer;
