import webpackStream from "webpack-stream"

export function js() {
   return app.gulp.src(`${app.path.src.js}/app.js`, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            "title": "JS",
            "message": "Error: <%= error.message %>",
         })
      ))
      .pipe(webpackStream({
         mode: app.isDev ? "development" : "production",
         output: {
            filename: "app.min.js",
         }
      }))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.if(
         app.isBuild,
         webpackStream({
            mode: "development",
            output: {
               filename: "app.js",
            }
         })
      ))
      .pipe(app.plugins.if(
         app.isBuild,
         app.plugins.beautify.js({ indent_size: 3 })
      ))
      .pipe(app.plugins.if(
         app.isBuild,
         app.gulp.dest(app.path.build.js)
      ))
      .pipe(app.plugins.browsersync.stream())
}