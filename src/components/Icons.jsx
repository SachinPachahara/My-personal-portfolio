import React from 'react';

export function GithubIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetcodeIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.498 5.84 5.84 0 0 0 1.991-.194 6.005 6.005 0 0 0 2.081-1.029l4.536-4.187a1.372 1.372 0 1 0-1.86-2.016l-4.538 4.187a3.255 3.255 0 0 1-1.127.558 3.097 3.097 0 0 1-1.077.106 3.193 3.193 0 0 1-2.593-1.884 3.107 3.107 0 0 1-.188-.548 3.07 3.07 0 0 1-.034-1.309 2.923 2.923 0 0 1 .67-1.17l3.85-4.12 5.4-5.783a1.37 1.37 0 0 0-.961-2.348z" />
      <path d="M9.833 10.924a1.372 1.372 0 1 0-1.94 1.94l3.864 3.864a1.372 1.372 0 1 0 1.94-1.94l-3.864-3.864z" />
    </svg>
  );
}
