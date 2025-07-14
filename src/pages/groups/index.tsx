// 📁 /pages/groups/index.tsx
import useSWR from "swr";
import Link from "next/link";
import { Group } from "@/models/Group";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GroupsPage() {
  const { data, error } = useSWR("/api/groups", fetcher);

  if (error) return <div>Error loading groups</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Groups | My Next App</title>
        <meta
          name="description"
          content="Explore all groups available in the system."
        />
        <meta
          name="keywords"
          content="groups, students, organization, next.js"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph (Facebook, Telegram, etc.) */}
        <meta property="og:title" content="Groups | My Next App" />
        <meta
          property="og:description"
          content="Explore all student groups available in the system."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://next-app-murex-one.vercel.app/groups"
        />
        <meta
          property="og:image"
          content="https://next-app-murex-one.vercel.app/images/groups-preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Groups | My Next App" />
        <meta
          name="twitter:description"
          content="Explore all student groups available in the system."
        />
        <meta
          name="twitter:image"
          content="https://next-app-murex-one.vercel.app/images/groups-preview.jpg"
        />
      </Head>
      <h1>Groups</h1>
      <ul>
        {data.map((group: Group) => (
          <li key={group._id}>
            {group.name} — {group.description}
          </li>
        ))}
      </ul>
      <Link href="/groups/new">Add Group</Link>
    </div>
  );
}
