import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { clientErrorHandler, logErrors, errorHandler } from '../error/errorHandlers';

export default {
  /**
     * @function
     * @description express middleware
     * @param {express.Application} app
     * @returns void
     */
  init(app) {
    app.use(bodyParser.urlencoded({
      extended: false,
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compression());
    app.use(helmet());
    app.use(cors());
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,'
                + ' Content-Type, Accept,'
                + ' Authorization,'
                + ' Access-Control-Allow-Credentials',
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  },
  errors(app) {
    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);
  },

};
