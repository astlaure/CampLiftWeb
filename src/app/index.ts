import app from './app';
import database from './database/database';
import config from './core/config';
import logger from './core/logger';

(async () => {
  try {
    await database.authenticate();
    app.listen(config.port, () => {
      logger.info(`server started on port ${config.port}.`);
    });
  } catch (err) {
    logger.error(err);
  }
})();
