import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'register' | 'verify'>('register');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('http://localhost:8000/api/user/auth/register', {
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
        throw new Error('Ошибка регистрации');
      }

      setStep('verify');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch('http://localhost:8000/api/user/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          verificationCode,
        }),
      });

      if (!response.ok) {
        throw new Error('Неверный код верификации');
      }

      const data = await response.json();
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('email', email);
      
      navigate('/user-info');
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
          <h1 className="text-3xl font-semibold tracking-tight">
            {step === 'register' ? 'Регистрация в AgroChain' : 'Подтверждение email'}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {step === 'register' 
              ? 'Создайте аккаунт для доступа к инвестициям' 
              : 'Введите код, отправленный на вашу почту'}
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        
        <div className="space-y-4 relative">
          {step === 'register' ? (
            <>
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
                  placeholder="Введите пароль"
                  className="h-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Подтвердите пароль
                </Label>
                <Input 
                  id="confirmPassword" 
                  type="password"
                  placeholder="Повторите пароль"
                  className="h-12"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              
              <Button 
                className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 
                  hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg shadow-primary/20
                  hover:shadow-primary/30 font-medium"
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? 'Регистрация...' : 'Зарегистрироваться'}
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="verificationCode" className="text-sm font-medium">
                  Код подтверждения
                </Label>
                <Input 
                  id="verificationCode" 
                  type="text"
                  placeholder="Введите код"
                  className="h-12"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>

              <Button 
                className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 
                  hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg shadow-primary/20
                  hover:shadow-primary/30 font-medium"
                onClick={handleVerify}
                disabled={loading}
              >
                {loading ? 'Проверка...' : 'Подтвердить'}
              </Button>
            </>
          )}
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
            Регистрация через egov mobile
          </Button>

          <Button
            variant="ghost"
            className="w-full text-muted-foreground hover:text-primary transition-colors"
            onClick={() => navigate('/login')}
          >
            Уже есть аккаунт? Войти
          </Button>
        </div>
      </Card>
    </div>
  )
}
