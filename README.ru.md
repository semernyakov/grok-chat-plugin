# Groq Chat Plugin для Obsidian

[![Релиз](https://img.shields.io/github/v/release/semernyakov/groq-chat-plugin?style=flat-square&label=релиз)](https://github.com/semernyakov/groq-chat-plugin/releases/latest)
[![Загрузки](https://img.shields.io/github/downloads/semernyakov/groq-chat-plugin/total?style=flat-square&label=загрузки)](https://github.com/semernyakov/groq-chat-plugin/releases)
[![Лицензия](https://img.shields.io/github/license/semernyakov/groq-chat-plugin?style=flat-square&label=лицензия)](LICENSE)
[![Тесты](https://img.shields.io/github/actions/workflow/status/semernyakov/groq-chat-plugin/ci.yml?branch=master&style=flat-square&label=тесты)](https://github.com/semernyakov/groq-chat-plugin/actions/workflows/ci.yml)
[![Покрытие](https://img.shields.io/codecov/c/github/semernyakov/groq-chat-plugin?style=flat-square&label=покрытие)](https://codecov.io/gh/semernyakov/groq-chat-plugin)
[![NPM](https://img.shields.io/npm/v/groq-chat-plugin?style=flat-square&label=npm)](https://www.npmjs.com/package/groq-chat-plugin)

[English version](README.md)

[Документация](https://semernyakov.github.io/groq-chat-plugin/ru/)

Плагин для [Obsidian](https://obsidian.md), который интегрирует возможности чата с AI от Groq прямо в ваши заметки.

## Возможности

- Прямая интеграция с моделями Groq AI
- Интерфейс чата в реальном времени
- Поддержка последних моделей Groq
- Поддержка форматирования Markdown
- Подсветка кода
- Поддержка мобильных устройств
- Выбор пользовательских моделей
- История чата
- Контекстно-зависимые ответы

## Установка

1. Откройте настройки Obsidian
2. Перейдите в раздел Community Plugins и отключите безопасный режим
3. Нажмите "Обзор" и найдите "Groq Chat"
4. Установите плагин
5. Включите плагин в разделе Community Plugins

## Настройка

1. Получите API ключ на [Groq Console](https://console.groq.com)
2. Откройте настройки плагина в Obsidian
3. Введите ваш API ключ
4. Настройте дополнительные параметры по необходимости

## Использование

1. Откройте любую заметку
2. Нажмите на иконку Groq Chat в боковой панели
3. Начните общение с AI
4. Используйте команды с `/` для дополнительных функций

## Разработка

```bash
# Клонировать репозиторий
git clone https://github.com/semernyakov/groq-chat-plugin.git

# Установить зависимости
npm install

# Запустить сервер разработки
npm run dev

# Собрать плагин
npm run build

# Запустить тесты
npm run test

# Проверить стиль кода
npm run lint
```

## Участие в разработке

Мы приветствуем ваше участие! Пожалуйста, прочтите наше [Руководство по участию](CONTRIBUTING.ru.md) для получения информации о кодексе поведения и процессе отправки pull request'ов.

## Безопасность

По вопросам безопасности, пожалуйста, ознакомьтесь с нашей [Политикой безопасности](SECURITY.ru.md) и сообщайте об уязвимостях ответственно.

## Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для подробностей.

## Поддержка

Если вы находите этот плагин полезным, рассмотрите возможность:
- [Поставить звезду репозиторию](https://github.com/semernyakov/groq-chat-plugin)
- [Поддержать разработку](https://github.com/sponsors/semernyakov)
- [Сообщить о проблеме](https://github.com/semernyakov/groq-chat-plugin/issues)

## История изменений

См. [CHANGELOG.ru.md](CHANGELOG.ru.md) для всех изменений.

## 📝 Описание

Groq Chat Plugin - это мощный плагин для Obsidian, который интегрирует возможности Groq AI непосредственно в ваше рабочее пространство. Используйте передовые языковые модели для улучшения вашего рабочего процесса в Obsidian.

## ✨ Основные возможности

- 🤖 Поддержка широкого спектра моделей:
  - **Production модели** (рекомендуются для основного использования):
    - Llama 3 70B Versatile (128K контекст)
    - Llama 3 8B Instant (128K контекст)
    - Mixtral 8x7B (32K контекст)
    - Gemma 2 9B (8K контекст)
    - Llama Guard 3 8B (для безопасности)
    - Whisper Large V3 (для аудио)
  - **Preview модели** (для тестирования):
    - Llama 3 90B Vision (поддержка изображений)
    - Qwen 2.5 Coder 32B (для работы с кодом)
    - Mistral Saba 24B
    - DeepSeek модели
- 🔐 Безопасное хранение API ключей
- 💬 Интерактивный чат-интерфейс
- 📚 Сохранение истории диалогов
- 🎨 Настраиваемый интерфейс
- 🌓 Поддержка светлой и темной темы
- ⚡ Быстрый доступ через боковую панель

## 🚀 Установка

1. Откройте Obsidian
2. Перейдите в Настройки → Сторонние плагины
3. Нажмите "Просмотреть" и найдите "Groq Chat"
4. Установите плагин
5. Включите плагин в списке установленных

## ⚙️ Настройка

### Настройка API ключа

1. Получите API ключ на [console.groq.com](https://console.groq.com)
2. Введите ключ в настройках плагина
3. Сохраните настройки

### Настройка моделей

#### Production модели

- **Llama 3 70B Versatile**

  - Контекст: 128K токенов
  - Макс. токенов ответа: 32,768
  - Рекомендуется для: общих задач

- **Llama 3 8B Instant**

  - Контекст: 128K токенов
  - Макс. токенов ответа: 8,192
  - Рекомендуется для: быстрых ответов

- **Mixtral 8x7B**

  - Контекст: 32K токенов
  - Рекомендуется для: сложных вычислений

- **Gemma 2 9B**

  - Контекст: 8K токенов
  - Рекомендуется для: эффективной работы

- **Whisper Large V3**
  - Макс. размер файла: 25 MB
  - Рекомендуется для: транскрипции аудио

#### Preview модели

- **Llama 3 90B Vision**

  - Поддержка изображений
  - Контекст: 128K токенов
  - Макс. токенов ответа: 8,192

- **Qwen 2.5 Coder 32B**
  - Специализация: работа с кодом
  - Контекст: 128K токенов

## 💡 Использование

1. **Открытие чата:**

   - Нажмите на иконку чата в боковой панели
   - Используйте горячую клавишу (по умолчанию: Ctrl/Cmd + Shift + G)

2. **Отправка сообщений:**

   - Введите текст в поле ввода
   - Нажмите Enter или кнопку "Отправить"
   - Используйте Shift + Enter для переноса строки

3. **Работа с моделями:**

   - Выберите модель в зависимости от задачи
   - Учитывайте ограничения контекста
   - Следите за использованием токенов

4. **Специальные возможности:**
   - Загрузка аудио для транскрипции (Whisper)
   - Работа с изображениями (Vision модели)
   - Анализ и генерация кода (Coder модели)

## ⌨️ Горячие клавиши

| Действие            | Windows/Linux    | macOS           |
| ------------------- | ---------------- | --------------- |
| Открыть чат         | Ctrl + Shift + G | Cmd + Shift + G |
| Отправить сообщение | Enter            | Enter           |
| Новая строка        | Shift + Enter    | Shift + Enter   |
| Очистить ввод       | Esc              | Esc             |

## 🎨 Настройка интерфейса

- Размер шрифта
- Отображение временных меток
- Выбор темы (светлая/темная/системная)
- Настройка максимальной длины истории

## 🔒 Безопасность

- Все токены хранятся локально в зашифрованном виде
- Поддержка безопасной авторизации через OAuth 2.0
- Шифрование данных при хранении

## 🐛 Устранение неполадок

### Распространенные проблемы:

1. **Ошибка авторизации:**

   - Проверьте правильность Client ID
   - Убедитесь, что redirect URI настроен корректно
   - Проверьте подключение к интернету

2. **Ошибка API:**

   - Проверьте статус сервиса Groq
   - Убедитесь в действительности токена
   - Проверьте лимиты использования

3. **Проблемы с моделями:**
   - Убедитесь, что выбрана подходящая модель
   - Проверьте ограничения контекста
   - Для preview моделей возможны перебои

## 🤝 Вклад в развитие

Мы приветствуем вклад в развитие проекта! Для участия:

1. Форкните репозиторий
2. Создайте ветку для вашей функции
3. Внесите изменения
4. Отправьте Pull Request

Подробнее смотрите в [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 Лицензия

MIT License. См. файл [LICENSE](LICENSE) для подробностей.

## 🙏 Благодарности

- Команде Obsidian за отличную платформу
- Groq за предоставление API
- Всем контрибьюторам за помощь в развитии

## 📞 Поддержка

- [Создать Issue](https://github.com/semernyakov/groq-chat-plugin/issues)
- [Документация](docs/PUBLISHING.ru.md)
- [Код проекта](https://github.com/semernyakov/groq-chat-plugin)

## 🎮 Демо

Посмотреть демо можно [здесь](https://semernyakov.github.io/groq-chat-plugin/demo)

---

Создано с ❤️ для сообщества Obsidian
