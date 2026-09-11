import Link from "next/link";
import Icon from "../Icon";

export function ShinyButton({ children, href, external = false, icon, className = "", ...props }) {
  const classes = `shiny-cta ${className}`;
  const content = <span>{children}{icon ? <Icon name={icon} className="h-4 w-4" /> : null}</span>;
  if (href) {
    if (external || href.startsWith("http")) {
      return <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...props}>{content}</a>;
    }
    return <Link href={href} className={classes} {...props}>{content}</Link>;
  }
  return <button type="button" className={classes} {...props}>{content}</button>;
}
