import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bunyan from 'bunyan';
import { sql } from '@vercel/postgres';
import { compare } from 'bcryptjs';

const log = bunyan.createLogger({
    name: 'pv-metrics',
    streams: [
        {
            level: 'info', // log INFO and above
            path: './log/pv-metrics.log'
        },
        {
            level: 'error', // log ERROR and above
            path: './log/pv-metrics-error.log'
        }
    ]
});
const handler = NextAuth({
        session: {
            strategy: 'jwt'
        },

        pages: {
            signIn: '/auth/login',
            error: '/auth/error'
        },
        secret: process.env.NEXTAUTH_SECRET,
        logger: {
            error(code, metadata) {
                log.error(code, metadata);
            },
            warn(code) {
                log.warn(code);
            },
            debug(code, metadata) {
                log.debug(code, metadata);
            }
        },
        providers: [
            CredentialsProvider({
                // The name to display on the sign in form (e.g. 'Sign in with...')
                name: 'Credentials',
                // The credentials is used to generate a suitable form on the sign in page.
                // You can specify whatever fields you are expecting to be submitted.
                // e.g. domain, username, password, 2FA token, etc.
                // You can pass any HTML attribute to the <input> tag through the object.
                credentials: {
                    email: {},
                    password: {}
                },
                // @ts-ignore
                async authorize(credentials, req) {
                    const response = await sql`
                     SELECT * FROM users WHERE email=${credentials?.email}
                    `;
                    const user = response.rows[0];
                    const passwordCorrect = await compare(
                        credentials?.password || '',
                        user.senha
                    );
                    // const passwordCorrect = await compare(credentials?.password ?? '', user.password);
                    // const passwordCorrect = credentials?.password === user.password;
                    // const emailCorrect = credentials?.email === user.email;
                    if (passwordCorrect) {
                        return {
                            id: user.id,
                            email: user.email,
                            name: user.name
                        };
                    }

                    return null;
                }
            })
        ]
    })
;

export { handler as GET, handler as POST };
