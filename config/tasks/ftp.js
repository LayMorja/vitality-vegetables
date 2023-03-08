import { ftpSetting } from "../settings/path.js";
import vinylFTP from "vinyl-ftp"
import util from "gulp-util";

export function ftp() {
   ftpSetting.log = util.log;
   const connection = vinylFTP.create(ftpSetting);
   return app.gulp.src(process.argv.includes("--full") ? [`${app.path.buildFolder}/**/*.*`, `!${app.path.build.js}/*.txt`] : [`${app.path.buildFolder}/**/*.*`, `!${app.path.buildFolder}/phpmailer/*.*`, `!${app.path.buildFolder}/*.php`, `!${app.path.build.js}/*.txt`])     
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            "title": "FTP",
            "message": "Error: <%= error.message %>",
         })
      ))
      .pipe(connection.dest(`/${app.path.ftp}/${app.path.rootFolder.toLowerCase()}`));
}