import { formatDistanceToNow } from 'date-fns'
import './Style/ConversationItem.css'

const ConversationItem = ({ conversation, isSelected, onClick }) => {
  const { customer, lastMessage, lastMessageTime, unread, starred } = conversation
  
  const formattedTime = formatDistanceToNow(new Date(lastMessageTime), { 
    addSuffix: true,
    includeSeconds: true
  })

  return (
    <div 
      className={`conversation-item ${isSelected ? 'selected' : ''} ${unread > 0 ? 'unread' : ''}`}
      onClick={onClick}
    >
      <div className="conversation-avatar">
        <img src={customer?.avatar || '/default-avatar.png'} alt="avatar" />

        {/* Safe access to customer.status with fallback */}
        <span className={`status-indicator ${customer?.status || 'offline'}`}></span>
      </div>
      
      <div className="conversation-content">
        <div className="conversation-header">
          <h3 className="conversation-name">{customer?.name || 'Unknown'}</h3>
          <span className="conversation-time">{formattedTime}</span>
        </div>
        
        <p className="conversation-preview">{lastMessage}</p>
        
        <div className="conversation-footer">
          {customer?.company && (
            <span className="company-tag">{customer.company}</span>
          )}
          {starred && (
            <span className="starred-indicator">★</span>
          )}
        </div>
      </div>
      
      {unread > 0 && (
        <div className="unread-badge">{unread}</div>
      )}
    </div>
  )
}

export default ConversationItem
