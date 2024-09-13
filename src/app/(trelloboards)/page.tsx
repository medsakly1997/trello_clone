import Header from "@/components/Header";
import Productivity from "@/components/Productivity";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="py-16 bg-[#e6fafc]">
        <Productivity />
        <Workflow />
      </div>
    </main>
  );
}
