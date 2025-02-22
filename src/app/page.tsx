import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        すべての人間は
      </h1>
      <Button variant="outline" size="sm" disabled>
        Button
      </Button>
      <Button disabled>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
