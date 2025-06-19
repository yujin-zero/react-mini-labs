"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Album = {
  title: string;
  id: number;
};

type AlbumItemClientProps = {
  album: Album;
};

export default function AlbumItemClient({
  album: originAlbum,
}: AlbumItemClientProps) {
  const params = useParams();
  const { albumId } = params;
  const [album, setAlbum] = useState<Album | null>(originAlbum);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setAlbum(data);
      });
  }, []);

  return (
    <div>
      <button
        className="bg-amber-300 p-3 rounded-2xl cursor-pointer"
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}>
        클릭
      </button>
      <p>앨범 제목: {isVisible && album && album.title}</p>
    </div>
  );
}
