import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="dark grid min-h-screen gap-10 bg-slate-400 py-20 px-10 xl:grid-cols-3">
      <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-black">
        <span className="text-3xl font-semibold">Select Item</span>

        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="my-2 flex justify-between odd:bg-blue-500 even:bg-yellow-500"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        {["a", "b", "c", ""].map((c, i) => (
          <li className="bg-red-500 py-2 empty:hidden" key={i}>
            {c}
          </li>
        ))}
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mx-auto mt-5 w-1/2 rounded-xl
          bg-blue-500 p-3 text-center text-white 
          hover:bg-teal-500 hover:text-black
          focus:bg-red-500 active:bg-yellow-500
         "
        >
          Checkout
        </button>
      </div>
      <div className="group overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Oders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400 transition-colors group-hover:bg-red-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2310</span>
            </div>
          </div>
          <div className="relative mt-5 -mt-10 mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molly</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">❤️</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-2">
              <button className="ring-opacity-1 h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2 " />
              <button className="ring-opacity-1 h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
              <button className="ring-opacity-1 h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-xl bg-blue-500 py-3 px-7 text-center text-sm text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <form className="flex flex-col space-y-3 rounded-lg bg-blue-200 p-5 focus-within:bg-blue-100">
        <input
          type="text"
          placeholder="Username"
          required
          className="peer border-4 border-red-100 p-1"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-400">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-400 peer-hover:bg-teal-200">
          Nice Username
        </span>
        <input type="submit" value="Submit" className="" />
      </form>
    </div>
  );
};

export default Home;
