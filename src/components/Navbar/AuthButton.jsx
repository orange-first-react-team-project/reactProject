import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const AuthButton = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, [auth]);

    const handleLogout = async () => {
        await signOut(auth);
    };

    return user ? (
        <ListItem
            onClick={handleLogout}
            className="flex items-center gap-3 cursor-pointer hover:bg-blue-500/50 text-white transition-all px-4 py-2 rounded-lg"
        >
            <ListItemPrefix>
                <PowerIcon className="h-5 w-5 text-white" />
            </ListItemPrefix>
            <span className="font-medium">Log Out</span>
        </ListItem>
    ) : (
        <Link to="/login">
            <ListItem className="flex items-center gap-3 hover:bg-blue-500/50 text-white transition-all px-4 py-2 rounded-lg">
                <ListItemPrefix>
                    <FontAwesomeIcon icon={faRightToBracket} className="h-5 w-5 text-white" />
                </ListItemPrefix>
                <span className="font-medium">Sign In</span>
            </ListItem>
        </Link>
    );
};

export default AuthButton;
