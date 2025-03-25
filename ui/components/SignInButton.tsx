import { signIn } from "@/auth"
 
export default function SignInButton() {
  return (
    <form action={async () => {"use server"; await signIn() }}>
      <button type="submit">Войти</button>
    </form>
  )
} 