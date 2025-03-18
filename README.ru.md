# Groq Chat Plugin для Obsidian

[![CI](https://github.com/semernyakov/grok-chat-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/semernyakov/grok-chat-plugin/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/semernyakov/grok-chat-plugin/branch/main/graph/badge.svg)](https://codecov.io/gh/semernyakov/grok-chat-plugin)
[![Version](https://img.shields.io/github/v/release/semernyakov/grok-chat-plugin)](https://github.com/semernyakov/grok-chat-plugin/releases)
[![License](https://img.shields.io/github/license/semernyakov/grok-chat-plugin)](LICENSE)

## 📝 Описание

Groq Chat Plugin - это мощный плагин для Obsidian, который интегрирует возможности Groq AI непосредственно в ваше рабочее пространство. Используйте передовые языковые модели для улучшения вашего рабочего процесса в Obsidian.

## ✨ Основные возможности

* 🤖 Прямой доступ к моделям Groq AI
* 🔐 Простая авторизация через Google
* 💬 Интерактивный чат-интерфейс
* 📚 Сохранение истории диалогов
* 🎨 Настраиваемый интерфейс
* 🌓 Поддержка светлой и темной темы
* ⚡ Быстрый доступ через боковую панель

## 🚀 Установка

1. Откройте Obsidian
2. Перейдите в Настройки → Сторонние плагины
3. Нажмите "Просмотреть" и найдите "Groq Chat"
4. Установите плагин
5. Включите плагин в списке установленных

## ⚙️ Настройка

### Авторизация через Google

1. Создайте проект в Google Cloud Console:
   * Перейдите на [console.cloud.google.com](https://console.cloud.google.com)
   * Создайте новый проект
   * Настройте OAuth consent screen
   * Создайте OAuth Client ID

2. Настройте OAuth Credentials:
   * Тип приложения: Web application
   * Название: Groq Chat
   * Authorized redirect URI: `obsidian://groq-chat/auth/callback`
   * Скопируйте полученный Client ID

3. Настройте плагин:
   * Вставьте Client ID в настройках плагина
   * Нажмите "Войти через Google"
   * Следуйте инструкциям для авторизации

### Настройка моделей

Плагин поддерживает следующие модели Groq:
* Llama 3 (70B)
* Llama 3 (8B)
* Mixtral (8x7B)
* Gemma (7B)
* Claude 3 Opus
* Claude 3 Sonnet
* Claude 3 Haiku

Для каждой модели можно настроить:
* Температуру генерации (0.1 - 1.0)
* Максимальное количество токенов
* Пользовательский промпт

## 💡 Использование

1. **Открытие чата:**
   * Нажмите на иконку чата в боковой панели
   * Используйте горячую клавишу (по умолчанию: Ctrl/Cmd + Shift + G)

2. **Отправка сообщений:**
   * Введите текст в поле ввода
   * Нажмите Enter или кнопку "Отправить"
   * Используйте Shift + Enter для переноса строки

3. **Работа с историей:**
   * История сохраняется автоматически
   * Используйте кнопку "Очистить историю" для сброса
   * Выберите способ хранения в настройках (память/файл)

## ⌨️ Горячие клавиши

| Действие | Windows/Linux | macOS |
|----------|---------------|-------|
| Открыть чат | Ctrl + Shift + G | Cmd + Shift + G |
| Отправить сообщение | Enter | Enter |
| Новая строка | Shift + Enter | Shift + Enter |
| Очистить ввод | Esc | Esc |

## 🎨 Настройка интерфейса

* Размер шрифта
* Отображение временных меток
* Выбор темы (светлая/темная/системная)
* Настройка максимальной длины истории

## 🔒 Безопасность

* Все токены хранятся локально в зашифрованном виде
* Поддержка безопасной авторизации через OAuth 2.0
* Шифрование данных при хранении

## 🐛 Устранение неполадок

### Распространенные проблемы:

1. **Ошибка авторизации:**
   * Проверьте правильность Client ID
   * Убедитесь, что redirect URI настроен корректно
   * Проверьте подключение к интернету

2. **Ошибка API:**
   * Проверьте статус сервиса Groq
   * Убедитесь в действительности токена
   * Проверьте лимиты использования

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

* Команде Obsidian за отличную платформу
* Groq за предоставление API
* Всем контрибьюторам за помощь в развитии

## 📞 Поддержка

* [Создать Issue](https://github.com/semernyakov/grok-chat-plugin/issues)
* [Документация](docs/PUBLISHING.ru.md)
* [Код проекта](https://github.com/semernyakov/grok-chat-plugin)

## 🎮 Демо

Посмотреть демо можно [здесь](https://semernyakov.github.io/grok-chat-plugin/demo)

---

Создано с ❤️ для сообщества Obsidian