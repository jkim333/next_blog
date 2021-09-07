import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <>
      <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
          <a>
            <div className={classes.image}>
              <Image
                src={imagePath}
                alt={title}
                width={1920}
                height={1080}
                layout="responsive"
              />
            </div>
            <div className={classes.content}>
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </a>
        </Link>
      </li>
    </>
  );
}
