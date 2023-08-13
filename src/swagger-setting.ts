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
      tags: [
        {
          name: "User",
          description: "Everything about Users",

        },
        {
          name: "Order",
          description: "Everything about Orders",

        },
        {
          name: "Product",
          description: "Everything about Products",

        }
      ],
      paths: {
        ['/user']: {
          get: {
            tags: [
              "User"
            ],
            summary: "Get all user info",
            description: "Get all user info",
            responses: {
              200: {
                description: "Successful operation",
                content: {
                  ['application/json']: {
                    schema: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/user"
                      },
                    }
                  }
                }
              },
              401: {
                description: "You not have access"
              },
              404: {
                description: "User not found"
              },
            }
          },
          post: {
            tags: [
              "User"
            ],
            summary: "Create new User",
            description: "Create new User",
            requestBody: {
              description: "Create new User",
              content: {
                ['application/json']: {
                  schema: {
                    $ref: "#/components/schemas/user"
                  }
                }
              },
              required: true
            },
            responses: {
              201: {
                description: "User Created Successfully",
                content: {
                  ['application/json']: {
                    schema: {
                      $ref: "#/components/schemas/user"
                    }
                  }
                }
              },
              401: {
                description: "You not have access"
              }
            }
          }
        },
        ['/user/{id}']: {
          get: {
            tags: [
              "User"
            ],
            summary: "Get single user info",
            description: "Get single user info",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "User ID values that need to be considered for filter",
                required: true,
                explode: true,
                schema: {
                  type: "integer",
                }
              }
            ],
            responses: {
              200: {
                description: "Successful operation",
                content: {
                  ['application/json']: {
                    schema: {
                      $ref: "#/components/schemas/user"
                    }
                  }
                }
              },
              401: {
                description: "You not have access"
              },
              404: {
                description: "User not found"
              },
            }
          },
          patch: {
            tags: [
              "User"
            ],
            summary: "Update user info",
            description: "Update user info",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "User ID values that need to be considered for Update",
                required: true,
                explode: true,
                schema: {
                  type: "integer",
                }
              }
            ],
            requestBody: {
              description: "Update User",
              content: {
                ['application/json']: {
                  schema: {
                    $ref: "#/components/schemas/user"
                  }
                }
              },
              required: true
            },
            responses: {
              200: {
                description: "Successful operation",
                content: {
                  ['application/json']: {
                    schema: {
                      $ref: "#/components/schemas/user"
                    }
                  }
                }
              },
              401: {
                description: "You not have access"
              },
              404: {
                description: "User not found"
              },
            }
          },
          delete: {
            tags: [
              "User"
            ],
            summary: "Delete user",
            description: "Delete user",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "User ID values that need to be considered for filter",
                required: true,
                explode: true,
                schema: {
                  type: "integer",
                }
              }
            ],
            responses: {
              200: {
                description: "Successful operation"
              },
              401: {
                description: "You not have access"
              },
              404: {
                description: "User not found"
              },
            }
          }
        }
      },
      components: {
        schemas: {
          user: {
            type: "object",
            properties: {
              id: { type: "integer", format: "int64", example: 0},
              name: { type: "string", example: "Test"},
              dateOfBirth: { type: "string", example: "2023/01/01"},
              phoneNumber: { type: "integer", format: "int64", example: 99876543210},
              gender: { type: "string", example: "Male"},
              location: { type: "string", example: "Chennai"}
            }
          }
        }
      }
    },
    apis: ["./routes/*.js"],
  };

  export const swaggerSpecs = swaggerJsdoc(options);