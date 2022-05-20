import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="divide-y-[1px] py-10">
      {[1, 11, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className="mb-3 flex cursor-pointer items-center space-x-3 px-4 py-3 pb-3"
        >
          <div className="h-10 w-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">내일 봅시다</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
