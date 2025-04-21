import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-emerald-950 dark:via-green-900 dark:to-emerald-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-green-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <Card className="w-full max-w-md p-8 space-y-6 shadow-2xl border border-emerald-100 dark:border-emerald-800 
          bg-white/90 dark:bg-emerald-950/90 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent dark:from-emerald-800/20" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-2 text-center relative"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              {step === 'register' ? 'Регистрация в AgroChain' : 'Подтверждение email'}
            </h1>
            <p className="text-sm text-emerald-700 dark:text-emerald-300">
              {step === 'register' 
                ? 'Создайте аккаунт для доступа к инвестициям' 
                : 'Введите код, отправленный на вашу почту'}
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 
                text-red-600 dark:text-red-400 text-sm rounded-lg p-3 text-center relative"
            >
              {error}
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 relative"
          >
            {step === 'register' ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="mail@example.com"
                    className="h-12 bg-white dark:bg-emerald-900/50 border-emerald-200 dark:border-emerald-700 
                      focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400
                      placeholder-emerald-400 dark:placeholder-emerald-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                    Пароль
                  </Label>
                  <Input 
                    id="password" 
                    type="password"
                    placeholder="Введите пароль"
                    className="h-12 bg-white dark:bg-emerald-900/50 border-emerald-200 dark:border-emerald-700 
                      focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400
                      placeholder-emerald-400 dark:placeholder-emerald-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                    Подтвердите пароль
                  </Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    placeholder="Повторите пароль"
                    className="h-12 bg-white dark:bg-emerald-900/50 border-emerald-200 dark:border-emerald-700 
                      focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400
                      placeholder-emerald-400 dark:placeholder-emerald-600"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 
                    hover:from-emerald-500 hover:to-green-400 text-white shadow-lg shadow-emerald-500/25 
                    hover:shadow-emerald-500/35 transition-all duration-300 hover:scale-[1.02] transform"
                  onClick={handleRegister}
                  disabled={loading}
                >
                  {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="verificationCode" className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                    Код подтверждения
                  </Label>
                  <Input 
                    id="verificationCode" 
                    type="text"
                    placeholder="Введите код"
                    className="h-12 bg-white dark:bg-emerald-900/50 border-emerald-200 dark:border-emerald-700 
                      focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-emerald-400
                      placeholder-emerald-400 dark:placeholder-emerald-600"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 
                    hover:from-emerald-500 hover:to-green-400 text-white shadow-lg shadow-emerald-500/25 
                    hover:shadow-emerald-500/35 transition-all duration-300 hover:scale-[1.02] transform"
                  onClick={handleVerify}
                  disabled={loading}
                >
                  {loading ? 'Проверка...' : 'Подтвердить'}
                </Button>
              </>
            )}
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-emerald-200 dark:bg-emerald-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-emerald-950 px-4 text-emerald-600 dark:text-emerald-400">или</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 relative"
          >
            <Button 
              variant="outline" 
              className="w-full h-12 rounded-xl bg-[#4B97D2]/5 hover:bg-[#4B97D2]/10 border-[#4B97D2]/20
                hover:border-[#4B97D2]/30 transition-all duration-300 font-medium text-[#4B97D2]
                hover:text-[#4B97D2]/90 shadow-sm hover:shadow hover:scale-[1.02] transform"
            >
              Регистрация через egov mobile
            </Button>

            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 
                  dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors"
                onClick={() => navigate('/')}
              >
                Вернуться на главную
              </Button>
              <Button
                variant="ghost"
                className="w-full text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 
                  dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-colors"
                onClick={() => navigate('/login')}
              >
                Уже есть аккаунт? Войти
              </Button>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}
