import type { SVGProps } from 'react';

interface LanguageIconProps extends SVGProps<SVGSVGElement> {
  langCode?: string; // e.g., "wo" for Wolof, "sr" for Serer
}

// This is a placeholder. Ideally, each language would have a unique, culturally relevant icon.
// For now, it displays the language code or a generic speech bubble.
export function LanguageIcon({ langCode, className, ...props }: LanguageIconProps) {
  if (langCode) {
    return (
      <svg
        viewBox="0 0 32 32"
        className={className}
        {...props}
        fill="currentColor"
      >
        <rect width="32" height="32" rx="4" fillOpacity="0.1" />
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          {langCode.toUpperCase()}
        </text>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}
