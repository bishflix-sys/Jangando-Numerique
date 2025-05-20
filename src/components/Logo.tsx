
import type { SVGProps } from 'react';
import Link from 'next/link';

// Culturally relevant icon placeholder for LinguaLearn Sénégal logo
// This could be a stylized baobab tree, talking drum, or similar Senegalese motif.
const SenegalMotifIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);


export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2 group" legacyBehavior>
      {/* With legacyBehavior, Link renders an <a> and applies its className.
          The children of Link go inside this <a>. A Fragment groups the content. */}
      <>
        <div className="p-1.5 bg-primary rounded-lg group-hover:bg-primary/90 transition-colors">
           <SenegalMotifIcon className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          Jàngandoo <span className="text-primary group-hover:text-foreground transition-colors">Numérique</span>
        </h1>
      </>
    </Link>
  );
}
