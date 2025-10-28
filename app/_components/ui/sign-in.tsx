import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { signIn } from "next-auth/react"
import Image from "next/image"

const SingIn = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>
      <Button
        variant={"outline"}
        className="gap-2 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image alt="google logo" src="/google.svg" width={18} height={18} />
        Google
      </Button>
    </>
  )
}

export default SingIn
