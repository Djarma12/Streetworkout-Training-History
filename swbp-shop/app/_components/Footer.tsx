import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div
        className="max-w-[130rem] mx-auto p-16 grid grid-cols-[1.2fr_0.8fr_1fr_1.2fr] gap-6 justify-items-center 
  md:grid-cols-3 md:justify-items-start sm:grid-cols-2 sm:gap-8 sm:items-center sm:grid-rows-[auto_auto] xs:grid-cols-1 xs:justify-items-start"
      >
        <div className="overview">
          {/* <Logo /> */}
          <p className="mt-3">
            We motivate and educate people through sports, promoting a healthy
            lifestyle and humanitarian work.
          </p>
          <div className="mt-3 flex gap-2">
            <Link
              href="https://www.instagram.com/street_workout_backa_palanka"
              target="_blank"
            >
              {/* <ButtonIcon variation="primary">
                <BiLogoInstagram />
              </ButtonIcon>
            </Link>
            <Link href="mailto:swbackapalanka@gmail.com">
              <ButtonIcon variation="primary">
                <BiSend />
              </ButtonIcon> */}
            </Link>
          </div>
        </div>
        <div className="grid-cel--2">
          <span className="text-red-50 text-2xl font-bold mb-6 inline-block">
            Explore
          </span>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-1">
              <span className="flex items-center text-primary text-3xl">
                {/* <BiChevronsRight /> */}
              </span>
              <Link href="/our-team" className="hover:text-primary transition">
                Our Team
              </Link>
            </li>
            <li className="flex gap-1">
              <span className="flex items-center text-primary text-3xl">
                {/* <BiChevronsRight /> */}
              </span>
              <Link href="/services" className="hover:text-primary transition">
                Services
              </Link>
            </li>
            <li className="flex gap-1">
              <span className="flex items-center text-primary text-3xl">
                {/* <BiChevronsRight /> */}
              </span>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
            <li className="flex gap-1">
              <span className="flex items-center text-primary text-3xl">
                {/* <BiChevronsRight /> */}
              </span>
              <Link href="/login" className="hover:text-primary transition">
                Track your progress
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-cel--3">
          <span className="text-red-50 text-2xl font-bold mb-6 inline-block">
            Our Contacts
          </span>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-1">
              <span className="flex items-center text-primary text-3xl">
                {/* <BiLogoInstagram /> */}
              </span>
              <Link
                href="https://www.instagram.com/street_workout_backa_palanka"
                target="_blank"
                className="hover:text-primary transition"
              >
                street_workout_backa_palanka
              </Link>
            </li>
            <li className="flex gap-1">
              <span className="flex items-center text-primary text-3xl">
                {/* <BiSend /> */}
              </span>
              <Link
                href="mailto:swbackapalanka@gmail.com"
                className="hover:text-primary transition"
              >
                swbackapalanka@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-cel--4">
          <ul className="grid grid-cols-3 gap-2">
            {/* {images.map((image) => (
              <li key={image.id} className="overflow-hidden">
                <picture>
                  <source type="image/webp" srcSet={image.imgpathWebp} />
                  <source type="image/jpg" srcSet={image.imgpathJpg} />
                  <img
                    className="h-full w-full transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    src={image.imgpathJpg}
                    alt="Training image"
                  />
                </picture>
              </li> 
             ))}*/}
          </ul>
        </div>
      </div>
      <p className="bg-gray-900 mx-auto text-center p-12 text-sm">
        Copyright ©2024 All rights reserved | This website is made with 🤍 by{" "}
        <Link
          href="https://www.instagram.com/street_workout_backa_palanka"
          target="_blank"
          className="hover:text-primary transition"
        >
          SWBP
        </Link>{" "}
        and{" "}
        <Link
          href="https://dusan-madjar.netlify.app"
          target="_blank"
          className="hover:text-primary transition"
        >
          dusan-madjar
        </Link>
        .
      </p>
    </footer>
  );
}

export default Footer;
