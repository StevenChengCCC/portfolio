import React from 'react';
export function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-card ${className}`}>{children}</div>;
}
export function CardHeader({ className = '', children }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
export function CardContent({ className = '', children }) {
  return <div className={`p-5 pt-0 ${className}`}>{children}</div>;
}
export function CardTitle({ className = '', children }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
