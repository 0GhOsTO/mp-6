import LoginDisplay from "@/components/LoginDisplay";

export default function Home() {

  console.log("#1 Home page Working");
  return (
      <div className = "flex flex-col items-center bg-blue-300 p-4">
        <LoginDisplay />
      </div>
  );
}
