import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Болельщик, Москва",
    avatar: "https://cdn.poehali.dev/projects/9b2f0625-e1a2-428e-9d06-fb233bb7b481/files/1c51edcc-5672-4efb-8d7b-19c296747864.jpg",
    content:
      "Невероятные ощущения! Фиджитал гонки — это совершенно новый уровень зрелищности. Смотрю каждый заезд в прямом эфире и не могу оторваться!",
  },
  {
    name: "Марина Соколова",
    role: "Фанат гонок, Санкт-Петербург",
    avatar: "/professional-woman-scientist.png",
    content:
      "Купила VIP-билет и это лучшее решение в жизни! Встреча с пилотами, лучшие места на трибуне — атмосфера просто электрическая.",
  },
  {
    name: "Дмитрий Павлов",
    role: "Постоянный зритель трансляций",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Сайт удобный, билеты купил за 2 минуты. Трансляции в отличном качестве, статистика по гонщикам всегда актуальная. Рекомендую всем!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят болельщики</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы тех, кто уже испытал адреналин фиджитал гонок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}