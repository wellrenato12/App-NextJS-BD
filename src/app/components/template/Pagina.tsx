import type { ReactNode } from "react";
import Menu from "./Menu";

export interface PaginaProps {
  children: ReactNode;
  className?: string;
}

export default function Pagina({ children, className }: PaginaProps) {
  return (
    <div className="flex">
      <Menu />
      <main className={`flex-1 p-7 ${className ?? ''}`}>
        {children}
      </main>
    </div>
  )
}