Express API with Typescript
-> npm init
-> npm i express
-> npm i -D typescript @types/express @types/node concurrently nodemon
-> npx tsc --init
-> Add TypeScript configuration setting in tsconfig.json file
    {
        "compilerOptions": {
            "target": "es2016",
            "module": "commonjs",
            "outDir": "./dist",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "noImplicitAny": true,
            "noImplicitReturns": true,
            "skipDefaultLibCheck": true,
            "skipLibCheck": true
        },
        "include": ["src/**/*"]
    }
-> Add Build Configuration in package.json file script property
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
-> Create src folder and index.ts file
-> Reference https://blog.logrocket.com/how-to-set-up-node-typescript-express/

Database
-> npm install --save mysql2
-> npm install --save-dev @types/node
-> Create src/server.ts file
-> Reference https://github.com/sidorares/node-mysql2/blob/HEAD/documentation/en/TypeScript-Examples.md

Swagger
-> npm i swagger-ui-express swagger-jsdoc
-> npm i --save-dev @types/swagger-ui-express @types/swagger-jsdoc