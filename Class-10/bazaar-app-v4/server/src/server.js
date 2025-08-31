import app from './app.js';
import AppDataSource from './data-source.js';

const PORT = 1234;

(async () => {
    try {
        await AppDataSource.connect();
        console.log('Database connnection open');
        app.listen(PORT, () => {
            console.log(`server started at port ${PORT}`);
        })
    }
    catch (err) {
        console.error(err);
    }
})();







