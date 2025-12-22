// Global type declarations for CSS/SCSS imports
// Add more file types here if needed (images, svgs, etc.)

declare module '*.css' {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
