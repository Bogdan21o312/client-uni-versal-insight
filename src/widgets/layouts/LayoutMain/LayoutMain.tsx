import {FC, ReactNode} from "react";
import Link from "next/link";

interface LayoutMainProps {
    children: ReactNode
}

export const LayoutMain:FC<LayoutMainProps> = ({children}) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/post'}>Posts</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
};
