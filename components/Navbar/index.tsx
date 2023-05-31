import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="assets/images/john4.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);