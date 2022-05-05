// FOR CSS MODULES TO WORK WITH TYPESCRIPT
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
