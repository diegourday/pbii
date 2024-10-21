import type { SVGProps } from "react";
const Monkeybar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21v-15l5 -3l5 3v15" />
    <path d="M8 21v-7" />
    <path d="M3 14h10" />
    <path d="M6 10a2 2 0 1 1 4 0" />
    <path d="M13 13c6 0 3 8 8 8" />
  </svg>
);
export default Monkeybar;
