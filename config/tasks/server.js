export function server() {
   app.plugins.browsersync.init({
      server: {
         baseDir: app.path.build.html,
      },
      notify: false
   });
}