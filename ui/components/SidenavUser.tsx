import { auth } from '@/auth';
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

export default async function SidenavUser() {
    const session = await auth()
    return (
        <div className='sidenavuser'>
            { session ? (
                <div className="user-info">
                    <span>{session.user?.email}</span>
                    <SignOutButton />
                </div>
            ) : (
             <SignInButton />
            )}
        </div>
        )
}