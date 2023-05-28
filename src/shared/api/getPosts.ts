export async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 0.1,
        },
    });

    if (!response.ok) throw new Error("Unable to fetch posts!");

    return response.json();
}
