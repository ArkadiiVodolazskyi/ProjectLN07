import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// to process run node webp.js

imagemin(['./src/img-to-webp/**/*.{jpg,jpeg,png}'], {
  destination: './src/img-webp/',
  plugins: [
		// https://www.npmjs.com/package/@mlz/imagemin-webp
    imageminWebp({
			// quality: 100,
			// method: 6,
			// lossless: true,
			// resize: {
			// 	width: 420,
			// 	height: 0
			// }
			size: 150000 // bytes
    }),
  ],
}).then(() => {
  console.log('Images Converted Successfully!!!');
});