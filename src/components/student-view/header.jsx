import { GraduationCap, Menu, TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-1 " />
          <span className="font-extrabold md:text-xl text-[14px]">
            ZEAL LMS
          </span>
        </Link>
        <div className="items-center space-x-1 hidden md:flex">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[14px] md:text-[16px] font-medium"
          >
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="items-center space-x-4 hidden md:flex">
        <div className="flex gap-4 items-center">
          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-3"
          >
            <span className="font-extrabold md:text-xl text-[14px]">
              My Courses
            </span>
            <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
          </div>
          <Button onClick={handleLogout}>Sign Out</Button>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="size-8 flex items-center justify-center md:hidden">
          <Menu size={28}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="md:hidden">
          <DropdownMenuLabel>ZEAL LMS</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              variant="ghost"
              onClick={() => {
                location.pathname.includes("/courses")
                  ? null
                  : navigate("/courses");
              }}
              className="text-[14px] md:text-[16px] font-medium w-full"
            >
              Explore Courses
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
                variant="ghost"
                onClick={() => navigate("/student-courses")}
                className="text-[14px] md:text-[16px] font-medium w-full"
              >
                My Courses
              </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant="ghost" className="text-[14px] md:text-[16px] font-medium w-full" onClick={handleLogout}>Sign Out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </header>
  );
}

export default StudentViewCommonHeader;
