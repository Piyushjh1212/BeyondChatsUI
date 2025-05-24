export const mockConversations = [
  {
    id: 'conv-1',
    customer: {
      id: 'cust-1',
      name: 'Sophie Turner',
      email: 'sophie@example.com',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r_h8hX34_Gz9pGCjSQytf_uFUDa2sU_l24ZpvZMei_1Txd0YMsqvTV4&s',
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
      avatar: 'data:image/jpeg;base64,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' ,
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
      avatar: 'data:image/jpeg;base64,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',
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