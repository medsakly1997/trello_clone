import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="px-[10%] py-16 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-purple-600 to-pink-400">
      <div className="text-white p-2">
        <h1 className="font-extrabold text-5xl">
          Trello brings all your tasks, teammates, and tools together
        </h1>
        <p className="text-lg mt-3 leading-10">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done.
        </p>
        <h3 className="text-xl font-semibold mt-5">
          WHAT YOU GET ON THE FREE PLAN:
        </h3>
        <ul className="my-3 leading-10">
          <li>Unlimited cards</li>
          <li>Unlimited Power-Ups per board</li>
        </ul>
        <div className="w-full flex max-w-sm items-center space-x-2 mt-3">
          <Input type="email" placeholder="email" />
          <Button type="submit" className="bg-blue-600 text-white">
            Sign up - it's free !
          </Button>
        </div>
      </div>
      <div>
        <img src="/header_img.jpg" alt="header_img" />
      </div>
    </header>
  );
};

export default Header;
