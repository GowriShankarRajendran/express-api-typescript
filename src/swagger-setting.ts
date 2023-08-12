import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Express API with TypeScript",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Gowri Shankar R",
          url: "https://goolge.com",
          email: "gowrishanker93@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:6200",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

  export const swaggerSpecs = swaggerJsdoc(options);