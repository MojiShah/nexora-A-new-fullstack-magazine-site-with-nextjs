import { redirect } from "next/navigation";

export default function OldPage() {
  redirect("/articles");
}