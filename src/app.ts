import express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json())
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

}

export { App };