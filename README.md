This is a submission for my fabrik interview. This repository contains the backend.


## Getting Started

First, install node_modules:

```
npm install
```

Now, we need to create environment config, we can do so by copying .env.sample to .env and editing it to contain our database user, password and database name. We are using prisma and details for different databases can be found here
[https://www.prisma.io/docs/guides/development-environment/environment-variables](https://www.prisma.io/docs/guides/development-environment/environment-variables)

Now let's get the database ready:
```
npm run prisma:migrate
```

Now let's build the backend:
```
npm run build
```

Finally, we can start the app.
```
npm start
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

Cheers!!