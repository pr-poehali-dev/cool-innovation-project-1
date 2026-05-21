import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Трансляции",
      content: (
        <div id="broadcasts">
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Не пропустите ни одной гонки! Смотрите текущие и прошедшие заезды в нашем интерактивном видеоплеере.
            Подпишитесь на уведомления и всегда знайте расписание предстоящих событий.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Прямые эфиры всех гонок чемпионата
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Архив прошедших заездов и нарезки лучших моментов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Расписание с уведомлениями на почту и в телефон
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Участники",
      content: (
        <div id="racers">
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Знакомьтесь с нашими гонщиками! Профили пилотов с фотографиями, статистикой и достижениями.
            Следите за любимым гонщиком на протяжении всего сезона.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Личные карточки с фото и историей побед
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Статистика: лучшее время круга, количество побед, рейтинг
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Изображения гоночных машин в фирменных цветах команды
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Трасса",
      content: (
        <div id="track">
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Исследуйте нашу трассу! Интерактивная карта со всеми ключевыми точками: крутые повороты,
            зоны обгонов и лучшие места для зрителей с максимальным обзором.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Интерактивная карта с отмеченными точками интереса
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фотогалерея трассы и её уникальных особенностей
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Информация о зонах для зрителей и парковке
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Всё о гонках — в одном месте</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От прямых трансляций до знакомства с пилотами и изучения трассы — мы создали полное пространство
            для болельщиков фиджитал гонок.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
