export const mockConversations = [
  {
    id: 'conv-1',
    customer: {
      id: 'cust-1',
      name: 'Sophie Turner',
      email: 'sophie@example.com',
      avatar: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'Acme Inc',
      status: 'online'
    },
    messages: [
      {
        id: 'msg-1',
        sender: 'customer',
        content: "Hi there! I'm having an issue with my recent order. The tracking information hasn't updated in 3 days.",
        timestamp: new Date(2025, 0, 15, 10, 23),
        seen: true
      },
      {
        id: 'msg-2',
        sender: 'agent',
        content: "Hello Sophie! I'm sorry to hear about the issue with your order tracking. Let me look into this right away for you.",
        timestamp: new Date(2025, 0, 15, 10, 25),
        seen: true
      },
      {
        id: 'msg-3',
        sender: 'customer',
        content: "Thank you! My order number is #ACM-38291.",
        timestamp: new Date(2025, 0, 15, 10, 26),
        seen: true
      }
    ],
    lastMessage: "Thank you! My order number is #ACM-38291.",
    lastMessageTime: new Date(2025, 0, 15, 10, 26),
    unread: 0,
    starred: true,
    category: 'order-issue'
  },
  {
    id: 'conv-2',
    customer: {
      id: 'cust-2',
      name: 'Marcus Johnson',
      email: 'marcus@example.com',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'TechCorp',
      status: 'busy'
    },
    messages: [
      {
        id: 'msg-4',
        sender: 'customer',
        content: "I need to upgrade my subscription plan. What are my options?",
        timestamp: new Date(2025, 0, 15, 9, 45),
        seen: true
      }
    ],
    lastMessage: "I need to upgrade my subscription plan. What are my options?",
    lastMessageTime: new Date(2025, 0, 15, 9, 45),
    unread: 1,
    starred: false,
    category: 'billing'
  },
  {
    id: 'conv-3',
    customer: {
      id: 'cust-3',
      name: 'Eliza Williams',
      email: 'eliza@example.com',
      avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'Freelancer',
      status: 'offline'
    },
    messages: [
      {
        id: 'msg-5',
        sender: 'customer',
        content: "Hello, I'm interested in your enterprise solution. Could you tell me more about the features?",
        timestamp: new Date(2025, 0, 14, 15, 30),
        seen: true
      },
      {
        id: 'msg-6',
        sender: 'agent',
        content: "Hi Eliza! I'd be happy to tell you about our enterprise solution. It includes advanced analytics, priority support, and custom integrations.",
        timestamp: new Date(2025, 0, 14, 15, 35),
        seen: true
      }
    ],
    lastMessage: "Hi Eliza! I'd be happy to tell you about our enterprise solution. It includes advanced analytics, priority support, and custom integrations.",
    lastMessageTime: new Date(2025, 0, 14, 15, 35),
    unread: 0,
    starred: true,
    category: 'sales'
  },
  {
    id: 'conv-4',
    customer: {
      id: 'cust-4',
      name: 'David Chen',
      email: 'david@example.com',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'ABC Holdings',
      status: 'online'
    },
    messages: [
      {
        id: 'msg-7',
        sender: 'customer',
        content: "I can't log in to my account. I've tried resetting my password, but I'm not receiving the reset email.",
        timestamp: new Date(2025, 0, 15, 8, 20),
        seen: true
      }
    ],
    lastMessage: "I can't log in to my account. I've tried resetting my password, but I'm not receiving the reset email.",
    lastMessageTime: new Date(2025, 0, 15, 8, 20),
    unread: 1,
    starred: false,
    category: 'technical'
  },
  {
    id: 'conv-5',
    customer: {
      id: 'cust-5',
      name: 'Amelia Rodriguez',
      email: 'amelia@example.com',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'Global Solutions',
      status: 'online'
    },
    messages: [
      {
        id: 'msg-8',
        sender: 'customer',
        content: "I'd like to request a refund for my last purchase. The product didn't meet my expectations.",
        timestamp: new Date(2025, 0, 14, 12, 10),
        seen: true
      },
      {
        id: 'msg-9',
        sender: 'agent',
        content: "Hello Amelia, I'm sorry to hear that. Could you please provide your order number so I can process the refund for you?",
        timestamp: new Date(2025, 0, 14, 12, 15),
        seen: true
      },
      {
        id: 'msg-10',
        sender: 'customer',
        content: "Sure, it's #GS-29384. Thank you for your help!",
        timestamp: new Date(2025, 0, 14, 12, 18),
        seen: false
      }
    ],
    lastMessage: "Sure, it's #GS-29384. Thank you for your help!",
    lastMessageTime: new Date(2025, 0, 14, 12, 18),
    unread: 1,
    starred: false,
    category: 'refund'
  }
];

export const aiSuggestions = {
  'order-issue': [
    "I've located your order #[ORDER_NUMBER] and I can see there was a delay in shipping. I've contacted our logistics team to expedite your delivery.",
    "I understand how frustrating shipping delays can be. Let me check the current status of your order and get back to you with an update in the next 30 minutes.",
    "Thank you for providing your order number. I can see your package is currently [STATUS]. Would you like me to set up email notifications for any updates?"
  ],
  'billing': [
    "I'd be happy to help you upgrade your subscription! We have several plans available: Basic ($9.99/mo), Pro ($19.99/mo), and Enterprise ($49.99/mo). Which features are most important to you?",
    "Thank you for your interest in upgrading! Our Pro plan would give you access to advanced features like [FEATURES]. Would you like to see a detailed comparison of all our plans?",
    "I can help you upgrade your subscription right away. Before we proceed, could you confirm if this is for personal use or for a team?"
  ],
  'sales': [
    "Our enterprise solution includes 24/7 priority support, custom integrations, advanced analytics, and dedicated account management. Would you like me to send you our detailed brochure?",
    "Thank you for your interest in our enterprise solution! It's designed for businesses that need scalability, advanced security, and dedicated support. Would you like to schedule a demo with our sales team?",
    "I'd be happy to tell you more about our enterprise features. We offer custom solutions tailored to your specific business needs. Could you share a bit about what challenges you're looking to solve?"
  ],
  'technical': [
    "I'm sorry you're having trouble logging in. Let's try a different approach. Could you check your spam folder for the reset email? If you don't see it there, I can manually reset your password.",
    "Let me help you troubleshoot this login issue. First, could you confirm the email address you're using to log in? Also, are you seeing any specific error messages?",
    "I understand how frustrating login issues can be. Let's get this resolved quickly. I'll send a new password reset link to your registered email right away."
  ],
  'refund': [
    "I've processed your refund for order #[ORDER_NUMBER]. You should see the credit back to your original payment method within 3-5 business days. Is there anything else I can help you with?",
    "I'm sorry the product didn't meet your expectations. I've initiated your refund request. Could you share what specifically didn't work for you? This feedback helps us improve our products.",
    "Thank you for providing your order number. I've processed your refund request. You'll receive a confirmation email shortly, and the funds should appear in your account within 3-5 business days."
  ],
  'general': [
    "Thank you for reaching out to us. How can I assist you today?",
    "I'll do my best to help resolve your issue quickly. Could you provide a few more details about what you're experiencing?",
    "I understand your concern and I'm here to help. Let me look into this for you right away."
  ]
};