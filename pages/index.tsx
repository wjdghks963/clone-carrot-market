import type { NextPage } from "next";
import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import useSWRInfinite from "swr/infinite";
import { Product } from "@prisma/client";
import useUser from "@libs/client/useUser";
import { useInfiniteScroll } from "@libs/client/useInfiniteScroll";
import { useEffect } from "react";

export interface ProductWithCount extends Product {
  _count: { favs: number };
}

interface ProductResponse {
  ok: boolean;
  products: ProductWithCount[];
  pages: number;
}

const getKey = (pageIndex: number, previousPageData: ProductResponse) => {
  if (pageIndex === 0) return `/api/products?page=1`;
  if (pageIndex + 1 > previousPageData.pages) return null;
  return `/api/products?page=${pageIndex + 1}`;
};

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data, setSize } = useSWRInfinite<ProductResponse>(getKey);
  const products = data ? data.map((item) => item.products).flat() : [];
  const page = useInfiniteScroll();

  useEffect(() => {
    setSize(page);
  }, [page, setSize]);

  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 divide-y">
        {products?.map((product) => (
          <Item
            id={product?.id}
            key={product?.id}
            title={product?.name}
            price={product?.price}
            hearts={product?._count.favs}
          />
        ))}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};
export default Home;
