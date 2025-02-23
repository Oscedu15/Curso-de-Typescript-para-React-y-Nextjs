import ArraysPage from "@/components/Arrays";
import IntersectionsPage from "@/components/IntersectionsExtends";
import ReactNodePage from "@/components/ReactNode";
import PropsPage from "@/components/TipadoProps";

function HomePage() {
  return (
    <div className="flex gap-x-8 justify-between items-center flex-wrap">
      <PropsPage />
      <ArraysPage />
      <ReactNodePage />
      <IntersectionsPage />
    </div>
  );
}

export default HomePage;
