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
    dispatch(send({ msg: form.msg, name: user1 })); //form의 msg에 꽂혀있는 것을 msg에, user1은 name에 꽂아준다.
  };
  const onChange = (e) => {
    let msg = e.target.value;
    dispatch(changeField(msg)); //form의msg에 꽂히게 된다.
  };
  return (
    //
    <div>
      <ChatBox
        form={form}
        user1={user1}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ChatBoxContainer;
