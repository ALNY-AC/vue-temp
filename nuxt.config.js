module.exports = {
    router: {
        middleware: 'auth',
        // mode: 'hash',
    },
    mode: 'spa',
    srcDir: 'src/',
    build: {
        babel: {

        }
    },
    css: [
    ],
    build: {
    },
    plugins: [
        '~/plugins/main.js',
    ],
    server: {
        port: 3000,
        host: '0.0.0.0',
        // port: 8080,
        // host: '192.168.3.107',
        // default: 80
        // default: localhost
    },
}   