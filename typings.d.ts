declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.txt";
declare module "*.gif";
declare module "*.xlsx";
declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
