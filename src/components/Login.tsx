import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch('http://localhost:8000/api/user/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Неверный email или пароль');
      }

      const data = await response.json();
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('email', email);
      
      navigate('/catalog');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-xl border-primary/10 relative overflow-hidden bg-white/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
            Вход в AgroChain
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Войдите в свой аккаунт для доступа к инвестициям
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        
        <div className="space-y-4 relative">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="mail@example.com"
              className="h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Пароль
            </Label>
            <Input 
              id="password" 
              type="password"
              placeholder="Введите свой пароль"
              className="h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Button 
            className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 
              hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg shadow-primary/20
              hover:shadow-primary/30 font-medium"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full bg-border/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-muted-foreground">или</span>
          </div>
        </div>

        <div className="space-y-4 relative">
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-xl bg-[#4B97D2]/5 hover:bg-[#4B97D2]/10 border-[#4B97D2]/20
              hover:border-[#4B97D2]/30 transition-all duration-300 font-medium text-[#4B97D2]
              hover:text-[#4B97D2]/90 shadow-sm hover:shadow"
          >
            Войти через egov mobile
          </Button>

          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate('/')}
            >
              Вернуться на главную
            </Button>
            <Button
              variant="ghost"
              className="w-full text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate('/register')}
            >
              Нет аккаунта? Зарегистрироваться
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
