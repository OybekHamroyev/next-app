// 📁 /pages/students/new.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function NewStudentPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", groupId: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, age: parseInt(form.age) }),
    });
    router.push("/students");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Age"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <input
        placeholder="Group ID"
        onChange={(e) => setForm({ ...form, groupId: e.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
}
