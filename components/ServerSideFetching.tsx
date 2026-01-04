import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

async function HomePage(){
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await res.json();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Albums</h1>
            {albums.map((album: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                <div key={album.id} className="mb-2 p-4 border border-gray-300 rounded">
                    <h2 className="text-xl font-semibold">{album.title}</h2>
                </div>
            ))}
        </div>
    );
}
export default HomePage;