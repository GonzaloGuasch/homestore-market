const proxy = requeri("http-proxy-middleaware")

module.exports = function(app){
    app.use(
        proxy("/Usuario/GuardarFactura",{
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    );
}