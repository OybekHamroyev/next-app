// 📁 /pages/groups/new.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function NewGroupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/groups");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Group Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
}
