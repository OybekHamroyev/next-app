// 📁 /pages/groups/index.tsx
import useSWR from "swr";
import Link from "next/link";
import { Group } from "@/models/Group";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function GroupsPage() {
  const { data, error } = useSWR("/api/groups", fetcher);

  if (error) return <div>Error loading groups</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
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
