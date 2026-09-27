import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={redHatDisplay.className}>
			<body>{children}</body>
		</html>
	);
}
