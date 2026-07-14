import Link from "next/link";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-primary-50 to-white">
      <Container size="narrow">
        <div className="text-center max-w-lg mx-auto">
          <div className="text-8xl font-bold text-primary-200 mb-4">404</div>
          <h1 className="text-3xl font-bold text-secondary-dark mb-4">
            Pagina niet gevonden
          </h1>
          <p className="text-foreground-muted mb-8 leading-relaxed">
            De pagina die u zoekt bestaat niet of is verplaatst. 
            Gebruik de navigatie om de juiste pagina te vinden of neem contact met ons op.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                Naar de homepage
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                Contact opnemen
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
