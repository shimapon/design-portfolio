import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "components/Layout";

const products = [
  {
    id: 1,
    name: "TreeView",
    href: "/TreeViewPage",
    imageSrc: "images/treeview.png",
    imageAlt: "Front of treeview",
  },
  {
    id: 2,
    name: "Buttons",
    href: "/Buttons",
    imageSrc: "images/buttons.png",
    imageAlt: "Front of buttons",
  },
  {
    id: 3,
    name: "Cards",
    href: "/Cards",
    imageSrc: "images/cards.png",
    imageAlt: "Front of cards",
  },
  {
    id: 4,
    name: "FloatingLabels",
    href: "/FloatingLabels",
    imageSrc: "images/fcards.png",
    imageAlt: "Front of FloatingLabels",
  },
  {
    id: 5,
    name: "Icons",
    href: "/Icons",
    imageSrc: "images/Icons.png",
    imageAlt: "Front of Icons",
  },
];

const Home: NextPage = () => {
  return (
    <Layout isTop>
      <div className="max-w-2xl mx-auto py-8 px-4 font-serif">
        <h1 className="text-3xl font-extrabold">デザインリスト</h1>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="mt-4 flex justify-between">
                <h2 className="text-2xl mb-1">{product.name}</h2>
              </div>
              <Link href={product.href}>
                <button className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover lg:w-full lg:h-full border-4 border-black dark:border-blue-500"
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
