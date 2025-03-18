import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '' }: HeaderProps) {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-semibold text-primary">AgroChain</h1>
          <nav className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors",
                isActive('/catalog') && "text-primary bg-primary/5"
              )}
              onClick={() => navigate('/catalog')}
            >
              Каталог
            </Button>
            <Button 
              variant="ghost" 
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors",
                isActive('/my-assets') && "text-primary bg-primary/5"
              )}
              onClick={() => navigate('/my-assets')}
            >
              Мои активы
            </Button>
            <Button 
              variant="ghost" 
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors",
                isActive('/finances') && "text-primary bg-primary/5"
              )}
              onClick={() => navigate('/finances')}
            >
              Финансы
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:inline">{email}</span>
          <div className="hidden md:block">
            <Button 
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10 text-muted-foreground hover:text-primary"
              onClick={handleLogout}
            >
              <UserCircle className="w-6 h-6" />
            </Button>
          </div>

          {/* Мобильное меню */}
          <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
              >
                <MenuIcon className="w-6 h-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-[calc(100vh-4rem)]rounded-none p-0 border-none bg-white">
              <nav className="flex flex-col gap-4 p-4">
                <div className="px-4 py-2 border-b">
                  <span className="text-sm text-muted-foreground">{email}</span>
                </div>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "justify-start h-12 text-muted-foreground hover:text-primary",
                    isActive('/catalog') && "text-primary bg-primary/5"
                  )}
                  onClick={() => handleNavigation('/catalog')}
                >
                  Каталог
                </Button>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "justify-start h-12 text-muted-foreground hover:text-primary",
                    isActive('/my-assets') && "text-primary bg-primary/5"
                  )}
                  onClick={() => handleNavigation('/my-assets')}
                >
                  Мои активы
                </Button>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "justify-start h-12 text-muted-foreground hover:text-primary",
                    isActive('/finances') && "text-primary bg-primary/5"
                  )}
                  onClick={() => handleNavigation('/finances')}
                >
                  Финансы
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start h-12 text-destructive hover:text-destructive/90"
                  onClick={handleLogout}
                >
                  Выйти
                </Button>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}

function UserCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}
