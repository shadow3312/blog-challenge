import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Challenge - Posts",
  description: "A blog sytem mangement",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {children} {modal}
    </div>
  );
}
