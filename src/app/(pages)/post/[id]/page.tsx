import {getPost} from "@/shared";
import {Metadata} from "next";

type PageProps = {
    params: {
        id: string;
    };
}

export async function generateMetadata({
                                           params: { id },
                                       }: PageProps): Promise<Metadata> {
    const post = await getPost(id);

    return {
        title: post.title,
    };
}

export default async function Page({ params: { id } }: PageProps) {
    const post = await getPost(id)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};
