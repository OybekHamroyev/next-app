// src/pages/students/index.tsx
import useSWR from "swr";
import Link from "next/link";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StudentsPage() {
  const { data, error } = useSWR("/api/students", fetcher);

  if (error) return <div>Error loading students</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Students List | My Next App</title>
        <meta
          name="description"
          content="View all students and their group assignments."
        />
        <meta
          name="keywords"
          content="students, education, groups, nextjs app"
        />
        <meta name="author" content="Oybek Hamroyev" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Students List" />
        <meta
          property="og:description"
          content="A list of students grouped in educational cohorts."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://next-app-8mok.vercel.app/students"
        />
      </Head>

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
