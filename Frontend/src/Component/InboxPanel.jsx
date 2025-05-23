import { useState } from 'react'
import ConversationItem from './ConversationItem'
import './Style/inboxPanel.css'
import { FiSearch, FiFilter, FiMail, FiStar } from 'react-icons/fi'

const InboxPanel = ({ conversations, selectedConversationId, onSelectConversation }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  
  const filteredConversations = conversations
    .filter(conversation => {
      // Apply search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase()
        return (
          conversation.customer.name.toLowerCase().includes(searchLower) ||
          conversation.lastMessage.toLowerCase().includes(searchLower)
        )
      }
      return true
    })
    .filter(conversation => {
      // Apply tab filter
      if (filter === 'unread') return conversation.unread > 0
      if (filter === 'starred') return conversation.starred
      return true
    })
    .sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime))

  return (
    <div className="inbox-panel">
      <div className="inbox-header">
        <h2>Inbox</h2>
        <div className="inbox-search">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="inbox-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <FiMail />
            <span>All</span>
            <span className="count">{conversations.length}</span>
          </button>
          <button 
            className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
            onClick={() => setFilter('unread')}
          >
            <FiMail />
            <span>Unread</span>
            <span className="count">
              {conversations.reduce((sum, conv) => sum + (conv.unread > 0 ? 1 : 0), 0)}
            </span>
          </button>
          <button 
            className={`filter-btn ${filter === 'starred' ? 'active' : ''}`}
            onClick={() => setFilter('starred')}
          >
            <FiStar />
            <span>Starred</span>
            <span className="count">
              {conversations.filter(conv => conv.starred).length}
            </span>
          </button>
        </div>
      </div>
      
      <div className="conversations-list">
        {filteredConversations.length > 0 ? (
          filteredConversations.map(conversation => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isSelected={conversation.id === selectedConversationId}
              onClick={() => onSelectConversation(conversation.id)}
            />
          ))
        ) : (
          <div className="no-conversations">
            <p>No conversations found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default InboxPanel