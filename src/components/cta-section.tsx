import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="tickets" className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Купите свой билет на скорость!
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Выберите тип билета и присоединяйтесь к тысячам болельщиков на самых захватывающих гонках сезона.
            Ранние покупатели получают специальные скидки!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Обычный билет
            </Button>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 border-0"
            >
              ⭐ VIP билет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Фанзона
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="border border-red-500/30 rounded-xl p-6 bg-black/40">
              <div className="text-3xl mb-2">🏁</div>
              <h3 className="text-white font-bold text-xl mb-2 font-orbitron">Стандарт</h3>
              <p className="text-gray-400 text-sm mb-4">Трибуна, все заезды сезона</p>
              <p className="text-red-400 text-2xl font-bold">от 1 500 ₽</p>
            </div>
            <div className="border border-yellow-500/50 rounded-xl p-6 bg-yellow-500/5 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                ПОПУЛЯРНЫЙ
              </div>
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="text-white font-bold text-xl mb-2 font-orbitron">VIP</h3>
              <p className="text-gray-400 text-sm mb-4">Паддок + встреча с пилотами</p>
              <p className="text-yellow-400 text-2xl font-bold">от 5 000 ₽</p>
            </div>
            <div className="border border-red-500/30 rounded-xl p-6 bg-black/40">
              <div className="text-3xl mb-2">🎉</div>
              <h3 className="text-white font-bold text-xl mb-2 font-orbitron">Фанзона</h3>
              <p className="text-gray-400 text-sm mb-4">Стоячие места, живая атмосфера</p>
              <p className="text-red-400 text-2xl font-bold">от 800 ₽</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
