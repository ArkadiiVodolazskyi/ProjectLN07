import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// to process run node webp.js

imagemin(['./src/img/**/*.{jpg,png}'], {
  destination: './src/img-webp/',
  plugins: [
		// https://www.npmjs.com/package/@mlz/imagemin-webp
    imageminWebp({
			quality: 100,
			method: 6,
			lossless: true,
			// resize: {
			// 	width: 420,
			// 	height: 0
			// }
    }),
  ],
}).then(() => {
  console.log('Images Converted Successfully!!!');
});