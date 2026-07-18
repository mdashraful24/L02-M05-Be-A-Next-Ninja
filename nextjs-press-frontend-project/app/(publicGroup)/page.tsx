import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <div>
      Hello, Next.js!

      <Button size={"sm"} variant={"destructive"}>
        Click Me
      </Button>
    </div>
  );
}
