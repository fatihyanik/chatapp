import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-green-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

function Navbar() {
  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
}

export default Navbar;
