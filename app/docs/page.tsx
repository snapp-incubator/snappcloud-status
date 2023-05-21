
import { Suspense } from "react";

async function getBucket(region: string) {
  const res = await fetch(`https://api.okd4.${region}.snappcloud.io:6443/version`);
  return res.json();
}

async function getQuota(region: string) {
  const res = await fetch(`https://api.okd4.${region}.snappcloud.io:6443/version`);
  return res.json();
}


async function Versions() {
  let region = "teh-1"
  const artistData = getBucket(region);
  const albumsData = getQuota(region);
  const [artist, albums] = await Promise.all([artistData, albumsData]);
  return (
    <h1>Hello, Next.js!  {artist.major} and album {albums.minor}</h1>
  )
}

export default async function Page() {

  return (
    <>
    <h1> sth</h1>

    <Suspense  fallback={<p>Loading feed...</p>}>
    <Versions />
    </Suspense>
    </>
  );
}
