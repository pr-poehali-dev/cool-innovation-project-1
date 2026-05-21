import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Живые трансляции",
    description: "Смотрите каждую гонку в режиме реального времени с несколькими камерами и комментаторами.",
    icon: "📺",
    badge: "LIVE",
  },
  {
    title: "Фиджитал формат",
    description: "Уникальный гибрид реальных и виртуальных гонок — соревнования проходят одновременно в двух мирах.",
    icon: "🎮",
    badge: "Гибрид",
  },
  {
    title: "Профили гонщиков",
    description: "Подробная статистика каждого участника: скорость, позиции, личные рекорды и история побед.",
    icon: "🏎️",
    badge: "Статистика",
  },
  {
    title: "Интерактивная трасса",
    description: "Исследуйте трассу на интерактивной карте: повороты, зоны обгонов, места для зрителей.",
    icon: "🗺️",
    badge: "3D карта",
  },
  {
    title: "VIP билеты",
    description: "Эксклюзивный доступ к паддоку, встречи с пилотами и лучшие места на трибунах.",
    icon: "⭐",
    badge: "VIP",
  },
  {
    title: "Галерея и моменты",
    description: "Лучшие фото и видео с гонок: обгоны, финиши, эмоции — всё в одном месте.",
    icon: "📸",
    badge: "Фото",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Добро пожаловать в мир фиджитал гонок!</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ощутите адреналин реальных и виртуальных соревнований в одном захватывающем шоу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
