/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV !== 'production';

const server = polka();

server.use(
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware(),
);

server.listen(PORT, (err) => {
  if (err) throw new Error('Server error');
  else console.log('App listen on port:', PORT);
});
