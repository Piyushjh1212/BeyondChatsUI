import { useEffect, useRef, useState } from 'react'
import { mockConversations } from './data/mockData.js'
import './App.css'
import InboxPanel from './Component/InboxPanel'
import ChatPanel from './Component/ChatPanel.jsx'
import CopilotPanel from './Component/CopilotPanel.jsx'
import { FiX} from 'react-icons/fi'
import { MdMenuOpen } from 'react-icons/md'
function App() {
  const [conversations, setConversations] = useState(mockConversations)
  const [selectedConversationId, setSelectedConversationId] = useState(mockConversations[0].id)
  const [isCopilotOpen, setIsCopilotOpen] = useState(false)
  const copilotRef = useRef();

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      isCopilotOpen &&
      copilotRef.current &&
      !copilotRef.current.contains(event.target)
    ) {
      setIsCopilotOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isCopilotOpen]);

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedConversationId
  )

  const handleSendMessage = (content) => {
    if (!content.trim()) return

    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: 'agent',
      content,
      timestamp: new Date(),
      seen: false,
    }

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversationId
          ? {
              ...conv,
              messages: [...conv.messages, newMessage],
              lastMessage: content,
              lastMessageTime: new Date(),
            }
          : conv
      )
    )
  }

  const handleSelectConversation = (id) => {
    setSelectedConversationId(id)

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === id
          ? {
              ...conv,
              unread: 0,
              messages: conv.messages.map((msg) => ({
                ...msg,
                seen: true,
              })),
            }
          : conv
      )
    )
  }

  const handleUseSuggestion = (suggestion) => {
    handleSendMessage(suggestion)
  }

  return (
    <div className="app-container">
      <div className="panel-container">
        <InboxPanel
          conversations={conversations}
          selectedConversationId={selectedConversationId}
          onSelectConversation={handleSelectConversation}
        />
        <ChatPanel
          conversation={selectedConversation}
          onSendMessage={handleSendMessage}
        />
      </div>

      <button
        className="toggle-copilot-button"
        onClick={() => setIsCopilotOpen((prev) => !prev)}
      >
        {isCopilotOpen ? <FiX /> : <MdMenuOpen />}
      </button>
      <div ref={copilotRef}>
        <CopilotPanel
        isOpen={isCopilotOpen}
        conversation={selectedConversation}
        onUseSuggestion={handleUseSuggestion}
      />
      </div>
      
    </div>
  )
}

export default App
