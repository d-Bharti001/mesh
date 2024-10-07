import Button from "~/components/button/button";
import Link from "~/components/link";
import { AboutSection } from "../";

export default function AboutMeeting() {
  return (
    <AboutSection
      title="Planning and Open Office"
      description="We meet every week to discuss the progress of the project and plan the next steps every Tuesday at 1200UTC, where we welcome anyone to join us and ask questions."
    >
      <>
        <Link href="https://calendar.google.com/calendar/u/0?cid=Y19lZjEyMDRhNGRhMDNmYzA1MWZiYTczOTIxN2E3MGMzZjAxNzI4NjBhYWQ2YTFlNGI2ZTEzNTE4ZTY5MTFlMjhhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">
          <Button>Subscribe to Calendar</Button>
        </Link>
      </>
    </AboutSection>
  );
}
