// src/pages/students/index.tsx
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StudentsPage() {
  const { data, error } = useSWR("/api/students", fetcher);

  if (error) return <div>Error loading students</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {data.map((student) => (
          <li key={student._id}>
            {student.name} (Age: {student.age}) - Group: {student.groupId?.name}
          </li>
        ))}
      </ul>
      <Link href="/students/new">Add Student</Link>
    </div>
  );
}
