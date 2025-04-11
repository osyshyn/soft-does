export const Play = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="none">
    <circle cx="60" cy="60" r="60" fill="#CFEC57" />
    <g clipPath="url(#a)">
      <path fill="#fff" d="m77.674 57.575-26.62-15.061c-2.363-1.336-4.296.014-4.296 3.002v28.969c0 2.988 1.933 4.338 4.296 3.002l26.62-15.054c2.356-1.343 2.356-3.522 0-4.858Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M45 42h36v36H45z" />
      </clipPath>
    </defs>
  </svg>
);
