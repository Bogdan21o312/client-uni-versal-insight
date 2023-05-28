import Link from "next/link";
import {getPosts} from "@/shared";

export const metadata = {
    title: 'Posts',
    description: 'Generated by create next app',
}

export default async function Page() {
    const posts = await getPosts()
    return (
        <>
            <h1>Blog page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
