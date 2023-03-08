import { deleteAsync } from 'del';
import GulpZip from 'gulp-zip';

export function install() {
	deleteAsync(`${app.path.rootFolder}-assembly/*.zip`);
	return app.gulp
		.src([
			`${app.path.rootFolder}/**/*.*`,
			`!${app.path.rootFolder}/src/**/*.*`,
			`!${app.path.rootFolder}/.gitignore`,
			`!${app.path.rootFolder}/.package-lock.json`,
		])
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'ZIP Assembly',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(GulpZip(`${app.path.rootFolder}-assembly.zip`))
		.pipe(app.gulp.dest('./'));
}
