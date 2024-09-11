import Navbar from "@/components/Navbar";

const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default BoardLayout;
