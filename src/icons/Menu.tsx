import type { SVGProps } from "react";
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 6l16 0"></path>
    <path d="M4 12l16 0"></path>
    <path d="M4 18l16 0"></path>
  </svg>
);
export default Menu;
