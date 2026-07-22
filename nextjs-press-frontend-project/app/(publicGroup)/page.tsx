import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      Hello, Next.js!

      <Button size={"sm"} variant={"destructive"}>
        Click Me
      </Button>
    </div>
  );
}
