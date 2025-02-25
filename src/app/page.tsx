import ArraysPage from "@/components/Arrays";
import AsPage from "@/components/As";
import IntersectionsPage from "@/components/IntersectionsExtends";
import ReactNodePage from "@/components/ReactNode";
import PropsPage from "@/components/TipadoProps";

function HomePage() {
  return (
    <div className="flex flex-col gap-x-8 items-center flex-wrap">
      <div className="flex gap-x-8 justify-between items-center">
        <PropsPage />
        <ArraysPage />
        <ReactNodePage />
        <IntersectionsPage />
      </div>
      <div className="mt-4">
        <AsPage />
      </div>
    </div>
  );
}

export default HomePage;
