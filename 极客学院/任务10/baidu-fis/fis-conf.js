fis.config.set('settings.spriter.csssprites.margin', 20);
fis.config.set('modules.postpackager', 'simple');

fis.config.set('pack', {
    '/js/lib.js': [
        'js/jquery-3.1.1.js',
        'js/index.js',
    ],
    '/css/all.css': '**.css'
});

fis.config.set('settings.postpackager.simple.autoCombine', true);