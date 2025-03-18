import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-primary">AgroChain</h1>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-primary"
              onClick={() => navigate('/login')}
            >
              Войти
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/register')}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Инвестируйте в будущее сельского хозяйства
            </h2>
            <p className="text-xl text-muted-foreground">
              AgroChain - это современная платформа для инвестиций в сельскохозяйственные активы. 
              Начните зарабатывать на умных инвестициях уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-primary/90 
                  hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg shadow-primary/20
                  hover:shadow-primary/30 font-medium"
                onClick={() => navigate('/register')}
              >
                Начать инвестировать
              </Button>
              <Button 
                variant="outline"
                className="h-12 px-8 rounded-xl border-2 border-primary/10 hover:bg-primary/5 
                  transition-all duration-300 font-medium"
                onClick={() => navigate('/catalog')}
              >
                Посмотреть каталог
              </Button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10">
              <h3 className="text-lg font-semibold mb-3">Безопасные инвестиции</h3>
              <p className="text-muted-foreground">
                Все активы проверены и застрахованы. Ваши инвестиции под надежной защитой.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10">
              <h3 className="text-lg font-semibold mb-3">Прозрачность</h3>
              <p className="text-muted-foreground">
                Отслеживайте доходность ваших инвестиций в реальном времени.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10">
              <h3 className="text-lg font-semibold mb-3">Удобство</h3>
              <p className="text-muted-foreground">
                Управляйте своими активами через современный и понятный интерфейс.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
