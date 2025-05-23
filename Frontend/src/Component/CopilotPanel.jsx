import React from 'react'
import './Style/CopilotPanel.css'

const CopilotPanel = ({ isOpen, conversation, onUseSuggestion }) => {
  if (!conversation) return null

  const suggestions = [
    `Ask about order #${conversation.id}`,
    `Follow up on previous issue`,
    `Request feedback from ${conversation.customer?.name || 'customer'}`
  ]

  return (
    <div className={`copilot-sidebar ${isOpen ? 'open' : ''}`}>
      <h2>AI Copilot</h2>
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
  )
}

export default CopilotPanel
