```bash
npm init -y
```

```bash
npm install express cors dotenv
```

```bash
npm install  -D typescript ts-node-dev @types/express @types/cors nodemon
```

```bash
npx tsc --init
```

modify the `tsconfig.json` to include this line
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "resolveJsonModule": true,
    "esModuleInterop": true,

    // other options remain same
  }
}
```

create data/department.json and data/employee.json

```ts index.ts
import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import employeeData from './data/employee.json'
import departmentData from './data/department.json'

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.json({ "msg": "Hello World!" })
});

app.listen(port, () => {
  console.log(employeeData, departmentData);

  console.log(`Server is Fire at http://localhost:${port}`);
});
```

modify the package.json to include the following scripts
```json
 "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon index.ts"
  }
```


