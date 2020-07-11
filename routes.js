module.exports = function(app){

    const application = require('./routes/application');
    const api = require('./routes/api');

    app.use('/', application);

    app.use('/api', api);
}