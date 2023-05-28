export async function getPost(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 0.1,
            },
        }
    );

    return response.json();
}
