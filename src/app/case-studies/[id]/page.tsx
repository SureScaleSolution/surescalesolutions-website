import { Approach } from "@/components/case/Approach";
import { Challenges } from "@/components/case/Challenges";
import { Hero } from "@/components/case/Hero";
import { Impact } from "@/components/case/Impact";
import { Result } from "@/components/case/Result";
import { Testimonial } from "@/components/case/Testimonial";
import { CTO1 } from "@/components/common/CTO1";
import PageWrapper from "@/components/common/PageWrapper";
import { CaseStudyDocument } from "@/types/caseStudy";
import NotFound from "@/components/case/NotFound";

interface CasePageProps {
  params: Promise<{ id: string }>;
}

async function getCaseStudy(id: string): Promise<CaseStudyDocument | null> {
  try {
    // Use absolute URL for server-side fetch
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/case-studies?id=${id}`, {
      cache: "no-store",
    });
    const json = await res.json();
    if (!res.ok || !json?.success) {
      return null;
    }
    return json.data as CaseStudyDocument;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params;
  const caseStudy = await getCaseStudy(id);

  return (
    <PageWrapper>
      {!caseStudy && <NotFound />}
      {caseStudy && (
        <>
          <Hero caseStudy={caseStudy} />
          <Challenges caseStudy={caseStudy} />
          <Approach caseStudy={caseStudy} />
          <Impact caseStudy={caseStudy} />
          <Result caseStudy={caseStudy} />
          <Testimonial caseStudy={caseStudy} />
          <CTO1 description="Account reinstatement is not just about getting back online , it's about building a safer, stronger, and more profitable Amazon business." />
        </>
      )}
    </PageWrapper>
  );
}
