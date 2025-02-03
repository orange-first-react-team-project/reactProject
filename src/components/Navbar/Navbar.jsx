import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Assignment, Dashboard, Article } from "@mui/icons-material";
import AuthButton from "./AuthButton";
import useUserType from "./useUserType";
import Contact from './../Contact/Contact';

function Navbar() {
  const userType = useUserType();

  return (
    <Card className="flex flex-row items-center justify-between top-0 w-full p-3 shadow-xl shadow-blue-gray-900/5 bg-[#2973B2] rounded-none">
      <div className="p-4">
        <Typography variant="h5" color="blue-gray" className="text-white">
          <Link to="/">To-Do List</Link>
        </Typography>
      </div>

      <List className="flex flex-row gap-6 items-center hidden md:flex">
        <Link to="/task" className="flex items-center text-white">
          <ListItem className="flex items-center hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-all">
            <ListItemPrefix>
              <Assignment className="h-5 w-5" />
            </ListItemPrefix>
            Task
          </ListItem>
        </Link>

        {userType === "admin" && (
          <Link to="/dashboard" className="flex items-center text-white">
            <ListItem className="flex items-center hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-all">
              <ListItemPrefix>
                <Dashboard className="h-5 w-5" />
              </ListItemPrefix>
              <p>Dashboard</p>
            </ListItem>
          </Link>
        )}

        <Link to="/articles" className="flex items-center text-white">
          <ListItem className="flex items-center hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-all">
            <ListItemPrefix>
              <Article className="h-5 w-5" />
            </ListItemPrefix>
            Articles
          </ListItem>
        </Link>

        {userType !== null && (
          <Link to="/profile" className="flex items-center text-white">
            <ListItem className="flex items-center hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-all">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
          </Link>
        )}

        <Link to="/about" className="flex items-center text-white">
          <ListItem className="flex items-center hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-all">
            About
          </ListItem>
        </Link>

        <Link to="/contact" className="flex items-center text-white">
          <ListItem className="flex items-center hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-all">
            Contact
          </ListItem>
        </Link>

        <AuthButton />
      </List>

      <div className="md:hidden">
        <button className="text-white text-lg focus:outline-none">☰</button>
        <List className="absolute right-4 top-16 bg-blue-700 rounded-lg shadow-lg hidden">
          <ListItem>
            <Link to="/task" className="text-white">
              Task
            </Link>
          </ListItem>
          {userType === "admin" && (
            <ListItem>
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
            </ListItem>
          )}
          <ListItem>
            <Link to="/articles" className="text-white">
              Articles
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/profile" className="text-white">
              Profile
            </Link>
          </ListItem>
          <ListItem>
            <AuthButton />
          </ListItem>
        </List>
      </div>
    </Card>
  );
}

export default Navbar;
