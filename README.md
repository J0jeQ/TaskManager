Task Manager

Task Manager to aplikacja do zarządzania zadaniami, która pozwala na łatwe dodawanie, oznaczanie jako wykonane oraz usuwanie zadań. Aplikacja oferuje prosty interfejs użytkownika, umożliwiając zarządzanie zadaniami w czasie rzeczywistym. Backend oparty jest na Node.js i MongoDB, a komunikacja z frontendem odbywa się za pomocą REST API.

🚀 Funkcje

Dodawanie zadań: Możliwość dodawania nowych zadań do listy.
Oznaczanie zadań jako wykonane: Użytkownik może oznaczyć zadanie jako ukończone klikając przycisk.
Usuwanie zadań: Opcja usuwania zadań z listy.
Dynamiczna aktualizacja: Zmiany na stronie (dodawanie, usuwanie, aktualizacja) są natychmiastowo widoczne.
API: Aplikacja udostępnia API, które umożliwia obsługę zadań poprzez frontend lub inne aplikacje.

🛠 Technologie
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Baza danych: MongoDB
API: RESTful API

🔧 Instalacja
Klonowanie repozytorium:
git clone https://github.com/J0jeQ/TaskManager.git
cd TaskManager

Instalacja zależności:
Upewnij się, że masz zainstalowany Node.js i npm. Następnie zainstaluj zależności:

npm install
Uruchomienie aplikacji:
Aby uruchomić aplikację, użyj poniższego polecenia:
npm start

Aplikacja będzie dostępna pod adresem http://localhost:3000.
MongoDB:
Upewnij się, że masz działającą instancję MongoDB (możesz użyć MongoDB Atlas) i skonfiguruj połączenie w pliku config/DBconnection.js.

🌍 Użycie
Otwórz aplikację w przeglądarce pod adresem http://localhost:3000.
Dodawaj zadania przez pole tekstowe i klikając przycisk Dodaj.
Oznacz zadania jako wykonane klikając przycisk ✔️.
Usuń zadania klikając przycisk ❌ obok zadania.
Zadania są przechowywane w MongoDB, co zapewnia ich trwałość.

📱 Interfejs użytkownika
Aplikacja posiada trzy sekcje:

Wszystkie: Wyświetla wszystkie zadania.
Ukończone: Wyświetla zadania, które zostały oznaczone jako wykonane.
Nieukończone: Wyświetla zadania, które nie zostały jeszcze ukończone.

⚡ API
Aplikacja udostępnia następujące endpointy API:

GET /api/tasks: Pobiera wszystkie zadania.
GET /api/tasks/:id: Pobiera zadanie o podanym ID.
POST /api/tasks: Dodaje nowe zadanie.
DELETE /api/tasks/:id: Usuwa zadanie o podanym ID.
PATCH /api/tasks/:id: Aktualizuje zadanie (np. zmienia status done).
