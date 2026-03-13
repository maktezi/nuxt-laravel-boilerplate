# Nuxt + Laravel GraphQL Boilerplate

A simple full-stack boilerplate using **Nuxt** for the frontend and **Laravel** with **GraphQL** for the backend.

---

## Stack

* Nuxt 4
* Laravel 12
* GraphQL (Lighthouse)
* Apollo Client
* Laravel Passport
* PostgreSQL / MySQL

---

## Installation

### Backend (Laravel)

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

GraphQL endpoint:

```
http://localhost:8000/graphql
```

---

### Frontend (Nuxt)

```bash
npm install
npm run dev
```

```
NUXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:8000/graphql
```

Frontend URL:

```
http://localhost:3000
```

---

## Example GraphQL Query

```graphql
query {
  users {
    id
    name
    email
  }
}
```

---

## License

MIT
