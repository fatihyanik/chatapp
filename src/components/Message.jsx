import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-green-600 text-xs`,
  sent: `bg-[#13ed29] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#b5b5ba] text-black float-left rounded-br-full`,
};

function Message({ message }) {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
