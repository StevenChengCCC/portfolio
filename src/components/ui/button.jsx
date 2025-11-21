import React from 'react';

export function Button({ asChild, children, className = '', variant = 'default', size = 'md', ...props }) {
  const Comp = asChild ? 'span' : 'button';

  const variants = {
    // Light: black bg / white text; Dark: white bg / black text
    default: 'bg-black text-white hover:opacity-90 dark:bg-white dark:text-black',

    outline: 'border border-black/20 dark:border-white/15 bg-white dark:bg-transparent hover:bg-black/5 dark:hover:bg-white/10',

    // Ghost: transparent with subtle hover
    ghost: 'hover:bg-black/5 dark:hover:bg-white/10 bg-transparent'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-2.5 text-base'
  };

  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-2xl transition ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}