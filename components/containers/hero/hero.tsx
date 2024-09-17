import { Badge } from '@/components/ui/badge';

export const Hero = () => {
  return (
    <section className="container mx-auto flex max-w-4xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-12">
      <Badge className="my-2 text-center" variant="secondary">
        Powered by The Grid
      </Badge>

      <h1 className="scroll-m-20 text-balance text-center text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl lg:leading-[1.1]">
        An explorable list of Breakpoint 2024 Sponsors / Exhibtors.
      </h1>
      <p className="max-w-xl text-center text-lg font-light text-foreground">
        Use the filters below to see the data and find projects interesting to you.
      </p>
    </section>
  );
};
