import TopStrip from '@/components/TopStrip';
import Navigation from '@/components/Navigation';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopStrip />
      <Navigation />
      {children}
    </>
  );
}
