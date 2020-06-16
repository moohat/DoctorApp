import React from 'react';
import ChatIsMe from './ChatIsMe';
import ChatOther from './ChatOther';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <ChatIsMe />;
  }
  return <ChatOther />;
};

export default ChatItem;

