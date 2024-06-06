
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
