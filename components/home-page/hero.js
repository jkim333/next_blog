import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ji.jpeg"
          alt="Ji"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1>Hi, I'm Ji</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
        quam?
      </p>
    </section>
  );
}
