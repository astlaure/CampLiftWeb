import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import security from './security/security';
import securityRouter from './security/security.router';
import journalRouter from './journals/journal.router';
import appRouter from './app.router';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(security.initialize());

app.use(express.static('public'));
app.use('/api/security', securityRouter);
app.use('/api/journals', journalRouter);
app.use(appRouter);

export default app;
