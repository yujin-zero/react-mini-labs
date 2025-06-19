import React from "react";
import AlbumItemClient from "./AlbumItem.client";

export default async function AlbumItem({ albumId }: { albumId: string }) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  const album = await resp.json();

  return <AlbumItemClient album={album} />;
}
