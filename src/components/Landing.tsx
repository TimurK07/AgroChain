import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-emerald-950 dark:via-green-900 dark:to-emerald-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-green-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-emerald-950/80 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-800 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent"
          >
            AgroChain
          </motion.h1>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-emerald-700 hover:text-emerald-600 dark:text-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/50"
              onClick={() => navigate('/login')}
            >
              Войти
            </Button>
            <Button 
              className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-300"
              onClick={() => navigate('/register')}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <main className="relative pt-40 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Инвестируйте в будущее сельского хозяйства
            </h2>
            <p className="text-xl text-emerald-700 dark:text-emerald-300">
              AgroChain - это современная платформа для инвестиций в сельскохозяйственные активы. 
              Начните зарабатывать на умных инвестициях уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="h-14 px-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 
                  hover:from-emerald-500 hover:to-green-400 text-white shadow-xl shadow-emerald-500/20 
                  hover:shadow-emerald-500/30 font-medium hover:scale-105 transform
                  transition-all duration-300"
                onClick={() => navigate('/register')}
              >
                Начать инвестировать
              </Button>
              <Button 
                variant="outline"
                className="h-14 px-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 
                  hover:bg-emerald-50 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300
                  transition-all duration-300 font-medium hover:scale-105 transform
                  hover:border-emerald-300 dark:hover:border-emerald-600"
                onClick={() => navigate('/catalog')}
              >
                Посмотреть каталог
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/80 dark:bg-emerald-900/30 shadow-xl shadow-emerald-500/10 
                border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700 
                backdrop-blur-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-800 dark:text-emerald-300">Безопасные инвестиции</h3>
              <p className="text-emerald-600 dark:text-emerald-400">
                Все активы проверены и застрахованы. Ваши инвестиции под надежной защитой.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/80 dark:bg-emerald-900/30 shadow-xl shadow-emerald-500/10 
                border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700 
                backdrop-blur-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-800 dark:text-emerald-300">Прозрачность</h3>
              <p className="text-emerald-600 dark:text-emerald-400">
                Отслеживайте доходность ваших инвестиций в реальном времени.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/80 dark:bg-emerald-900/30 shadow-xl shadow-emerald-500/10 
                border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700 
                backdrop-blur-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-800 dark:text-emerald-300">Удобство</h3>
              <p className="text-emerald-600 dark:text-emerald-400">
                Управляйте своими активами через современный и понятный интерфейс.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
