import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое фиджитал гонки?",
      answer:
        "Фиджитал гонки — это уникальный формат соревнований, объединяющий реальный (physical) и цифровой (digital) миры. Пилоты одновременно соревнуются на настоящей трассе и в виртуальной среде, создавая зрелище нового поколения.",
    },
    {
      question: "Как купить билеты на гонку?",
      answer:
        "Выберите тип билета в разделе «Билеты» на нашем сайте: обычный, VIP или фанзона. Укажите количество мест и оплатите онлайн. Билет придёт на вашу почту в формате QR-кода.",
    },
    {
      question: "Что входит в VIP-билет?",
      answer:
        "VIP-пакет включает: места в эксклюзивной трибуне с лучшим обзором, доступ в паддок, возможность встретиться с пилотами, приветственный набор болельщика и персональное обслуживание.",
    },
    {
      question: "Как смотреть трансляцию онлайн?",
      answer:
        "Все гонки транслируются бесплатно в разделе «Трансляции» на нашем сайте. Также вы можете подписаться на уведомления, чтобы не пропустить начало заезда.",
    },
    {
      question: "Есть ли скидки для ранних покупателей?",
      answer:
        "Да! Мы регулярно запускаем акции для ранних покупателей. Следите за разделом «Билеты» и подписывайтесь на рассылку — первыми узнаете о специальных предложениях.",
    },
    {
      question: "Как связаться с организаторами?",
      answer:
        "Вы можете написать нам через форму обратной связи в разделе «Контакты», либо в наших социальных сетях. Отвечаем в течение рабочего дня.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о фиджитал гонках, билетах и трансляциях.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
