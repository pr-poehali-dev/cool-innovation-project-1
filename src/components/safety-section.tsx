import { Card, CardContent } from "@/components/ui/card"

const RACE_CAR_IMG = "https://cdn.poehali.dev/projects/9b2f0625-e1a2-428e-9d06-fb233bb7b481/files/93bbb27b-56a4-4ffd-b11e-ff31de3c9d02.jpg"

type GalleryItem =
  | { image: string; emoji?: never; label: string; desc: string }
  | { emoji: string; image?: never; label: string; desc: string }

const gallery: GalleryItem[] = [
  { image: RACE_CAR_IMG, label: "Гоночный болид", desc: "Черно-красная машина на полной скорости" },
  { emoji: "🔥", label: "Обгон на повороте", desc: "Смелые манёвры лучших пилотов" },
  { emoji: "🏆", label: "Финиш и победа", desc: "Эмоции чемпионов на финишной черте" },
  { emoji: "🎮", label: "Виртуальная трасса", desc: "Цифровая составляющая фиджитал гонок" },
  { emoji: "👥", label: "Команды в паддоке", desc: "За кулисами — работа механиков и стратегов" },
  { emoji: "📸", label: "Зрители на трибунах", desc: "Тысячи болельщиков создают невероятную атмосферу" },
]

export function SafetySection() {
  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Лучшие моменты гонок</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Захватывающие кадры из мира фиджитал гонок — от старта до финиша
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up overflow-hidden cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-red-950/40 to-black h-48 flex items-center justify-center border-b border-red-500/20 group-hover:from-red-900/50 transition-all duration-300 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-7xl">{item.emoji}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-1 font-orbitron">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}