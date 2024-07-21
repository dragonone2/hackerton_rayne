import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './Navbar';

const ChatContainer = styled.div`
  width: 600px;
  height: 700px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  padding: 20px;
  margin-top: 20px;
`;

const MessageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const UserMessage = styled.div`
  align-self: flex-end;
  background: #f1f1f1;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
`;

const BotMessage = styled.div`
  align-self: flex-start;
  background: #ffd7d7;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 10px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background: #ff5757;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: '안녕하세요. 맘스위즈 입니다. 무엇을 도와드릴까요?' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = useCallback(async () => {
    if (newMessage.trim()) {
      const userMessage = newMessage.trim();
      setMessages(prevMessages => [...prevMessages, { type: 'user', text: userMessage }]);
      setNewMessage('');

      try {
        const response = await axios.post('/api/chat', { message: userMessage });
        const botMessage = response.data.response;
        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: botMessage }]);
      } catch (error) {
        console.error('Error sending message to backend:', error);
        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: 'Error: Unable to communicate with the server.' }]);
      }
    }
  }, [newMessage]);

  return (
    <>
      <Navbar />
      <ChatContainer>
        <MessageContainer>
          {messages.map((message, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
              {message.type === 'user' ? (
                <UserMessage>{message.text}</UserMessage>
              ) : (
                <BotMessage>{message.text}</BotMessage>
              )}
            </div>
          ))}
        </MessageContainer>
        <InputContainer>
          <Input 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            placeholder="메시지를 입력하세요..." 
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <SendButton onClick={handleSend}>전송</SendButton>
        </InputContainer>
      </ChatContainer>
    </>
  );
};

export default Chatbot;
