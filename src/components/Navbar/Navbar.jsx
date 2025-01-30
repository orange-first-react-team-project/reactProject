import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { Assignment, Dashboard, Article } from '@mui/icons-material';

function Navbar() {
  return (
    <Card className="sticky left-0 top-0 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-y-auto bg-[#FF6767] rounded-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          <Link to='/'>To-Do List</Link>
        </Typography>
      </div>
      <List>

        <Link to='/task'>
          <ListItem>
            <ListItemPrefix>
              <Assignment className="h-5 w-5" />
            </ListItemPrefix>
            Task
          </ListItem>
        </Link>

        <Link to='/dashboard'>
          <ListItem>
            <ListItemPrefix>
              <Dashboard className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        <Link to='/articles'>
          <ListItem>
            <ListItemPrefix>
              <Article className="h-5 w-5" />
            </ListItemPrefix>
            Articles
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to='/profile'>Profile</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card >
  )
}

export default Navbar