import { useEffect, useRef, useState } from 'react'
import './Style/ChatPanel.css'
import { format } from 'date-fns'

const ChatPanel = ({ conversation, onSendMessage }) => {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  // Auto-scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [conversation])

  if (!conversation) {
    return <div className="chat-panel">Select a conversation to start chatting.</div>
  }

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <img src={conversation.customer?.avatar || '/default-avatar.png'} alt="avatar" />
        <div>
          <h3>{conversation.customer?.name}</h3>
          <p className={`status ${conversation.customer?.status || 'offline'}`}>
            {conversation.customer?.status || 'offline'}
          </p>
        </div>
      </div>

      <div className="chat-messages">
        {conversation.messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.sender === 'agent' ? 'agent' : 'customer'}`}
          >
            <div className="bubble">
              <p>{msg.content}</p>
              <span className="timestamp">
                {format(new Date(msg.timestamp), 'p')}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default ChatPanel
