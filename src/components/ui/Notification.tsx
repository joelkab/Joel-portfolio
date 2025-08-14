import React from 'react';

interface NotificationProps {
  notification: { message: string; type: string } | null;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  if (!notification) return null;

  return (
    <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-2xl backdrop-blur-sm transition-all duration-300 ${
      notification.type === 'success' 
        ? 'bg-cyan-600/90 border border-cyan-500 text-white' 
        : 'bg-red-600/90 border border-red-500 text-white'
    }`}>
      <div className="flex items-center gap-3">
        <span className="text-xl">
          {notification.type === 'success' ? '✓' : '✗'}
        </span>
        <span className="font-medium">{notification.message}</span>
      </div>
    </div>
  );
};

export default Notification;