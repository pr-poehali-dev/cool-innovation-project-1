import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="contacts" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Связаться с нами</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Есть вопросы по билетам, трансляциям или участию в гонках? Напишите нам!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-white text-sm font-semibold mb-2 font-orbitron">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Петров"
                  className="w-full bg-white/5 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2 font-orbitron">Email</label>
                <input
                  type="email"
                  placeholder="ivan@example.com"
                  className="w-full bg-white/5 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2 font-orbitron">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Ваш вопрос или предложение..."
                  className="w-full bg-white/5 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron border-0 py-6 text-lg">
                Отправить сообщение
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="border border-red-500/20 rounded-xl p-6 bg-white/5">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-white font-bold font-orbitron mb-1">Email</h3>
              <p className="text-gray-400">info@phygitalrace.ru</p>
            </div>
            <div className="border border-red-500/20 rounded-xl p-6 bg-white/5">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-white font-bold font-orbitron mb-1">Социальные сети</h3>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors font-space-mono text-sm">VK</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors font-space-mono text-sm">Telegram</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors font-space-mono text-sm">YouTube</a>
              </div>
            </div>
            <div className="border border-red-500/20 rounded-xl p-6 bg-white/5">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-white font-bold font-orbitron mb-1">Место проведения</h3>
              <p className="text-gray-400">Москва, гоночный комплекс<br />Адрес будет объявлен</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
