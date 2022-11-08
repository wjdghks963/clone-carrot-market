import { Stream } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWRInfinite from "swr/infinite";
import { useInfiniteScroll } from "@libs/client/useInfiniteScroll";
import FloatingButton from "../../components/floating-button";
import Layout from "../../components/layout";
import { useEffect } from "react";

interface StreamsResponse {
  ok: boolean;
  streams: Stream[];
  pages: number;
}

const getKey = (pageIndex: number, previousPageData: StreamsResponse) => {
  if (pageIndex === 0) return `/api/streams?page=1`;
  if (pageIndex + 1 > previousPageData.pages) return null;
  return `/api/streams?page=${pageIndex + 1}`;
};

const Streams: NextPage = () => {
  const { data, setSize } = useSWRInfinite<StreamsResponse>(getKey);

  const page = useInfiniteScroll();
  useEffect(() => {
    setSize(page);
  }, [setSize, page]);

  const streams = data ? data.map((item) => item.streams).flat() : [];

  return (
    <Layout hasTabBar title="라이브 방송">
      <div className="space-y-5 divide-y-2 py-10 ">
        {streams.map((stream) => (
          <Link key={stream.id} href={`/streams/${stream.id}`}>
            <a className="block px-4  pt-4">
              <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
              <h1 className="mt-2 text-2xl font-bold text-gray-900">
                {stream.name}
              </h1>
            </a>
          </Link>
        ))}
        <FloatingButton href="/streams/create">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
