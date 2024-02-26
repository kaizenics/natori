import { ModeToggle } from "~/components/ui/toggle";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-12 py-5 sticky top-0 bg-transparent bg-opacity-90 backdrop-filter backdrop-blur-lg z-10">
        <div className="flex-row justify-between items-center pt-1">
          <div className="cursor-pointer">
            <div className="w-[30px] h-[2px] my-[6px] bg-black dark:bg-white"></div>
            <div className="w-[30px] h-[2px] my-[6px] bg-black dark:bg-white"></div>
            <div className="w-[30px] h-[2px] my-[6px] bg-black dark:bg-white"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};
