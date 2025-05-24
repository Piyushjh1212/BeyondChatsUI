import React, { useState } from 'react'
import './Style/CopilotPanel.css'

const CopilotPanel = ({ isOpen, conversation, onUseSuggestion, onSendMessage }) => {
  if (!conversation) return null

  const [message, setMessage] = useState('')

  const suggestions = [
    `Ask about order #${conversation.id}`,
    `Follow up on previous issue`,
    `Request feedback from ${conversation.customer?.name || 'customer'}`
  ]

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <div className={`copilot-sidebar ${isOpen ? 'open' : ''}`}>
      <h2>AI Copilot</h2>
      
      <div className="copilot-suggestions">
        <p>Suggestions:</p>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              <button onClick={() => onUseSuggestion(suggestion)}>
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Fixed message input at bottom */}
      <div className="copilot-input-area">
        <button onClick={handleSend}>Suggested</button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
      </div>
    </div>
  )
}

export default CopilotPanel
