'use client'
import React, { useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
}

const ClientSideFetching = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:");
      }
    };
    fetchAlbums();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Albums</h1>
      {albums.map((album) => (
        <div key={album.id} className="mb-2 p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold">{album.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ClientSideFetching;
