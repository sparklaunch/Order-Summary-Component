import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import desktopBackground from "./assets/images/desktop-background.svg";
import hero from "./assets/images/hero.svg";
import mobileBackground from "./assets/images/mobile-background.svg";
import music from "./assets/images/music.svg";

export default function Home() {
	return (
		<main className={styles.main}>
			<Image
				src={desktopBackground}
				alt=""
				className={styles.desktopBackground}
			/>
			<Image
				src={mobileBackground}
				alt=""
				className={styles.mobileBackground}
			/>
			<section className={styles.card}>
				<Image src={hero} alt="" className={styles.hero} />
				<div className={styles.body}>
					<h1 className={styles.header}>Order Summary</h1>
					<p className={styles.content}>
						You can now listen to millions of songs, audiobooks, and
						podcasts on any device anywhere you like!
					</p>
					<div className={styles.callout}>
						<div className={styles.plan}>
							<Image src={music} alt="" />
							<div className={styles.pricing}>
								<h2 className={styles.annualPlan}>
									Annual Plan
								</h2>
								<p className={styles.price}>$59.99/year</p>
							</div>
						</div>
						<Link href="#" className={styles.changeLink}>
							Change
						</Link>
					</div>
					<button type="button" className={styles.proceedButton}>
						Proceed to payment
					</button>
					<button type="button" className={styles.cancelButton}>
						Cancel Order
					</button>
				</div>
			</section>
		</main>
	);
}
