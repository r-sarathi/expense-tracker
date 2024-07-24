import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center">
      <div className="rounded-lg p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">404 | Not Found</h1>
        <p className="text-secondary-foreground">
          Oops! The page you are looking for could not be found.
        </p>
        <Button className="mt-5" variant="outline">
          <a href="/">Go back to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
