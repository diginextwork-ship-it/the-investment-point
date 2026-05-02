import TopStrip from '@/components/TopStrip';
import Navigation from '@/components/Navigation';

export default function ContactLayout({
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
