import ArraysPage from "@/components/Arrays";
import PropsPage from "@/components/TipadoProps";

function HomePage() {
  return (
    <div className="flex gap-x-8 justify-between items-center">
      <PropsPage />
      <ArraysPage />
    </div>
  );
}

export default HomePage;
